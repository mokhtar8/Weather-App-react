import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    UserName: "",
    password: "",
    ConfirmPassword: "",
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [enabled, setEnabled] = useState(false);

  const handlerPost = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.UserName) {
      newErrors.UserName = "please enter your username";
    }
    if (!formData.password) {
      newErrors.password = "please enter your password   ";
    }
    if (!formData.ConfirmPassword) {
      newErrors.ConfirmPassword = "please confirm  your password   ";
    }
    if (
      formData.password &&
      formData.ConfirmPassword &&
      formData.password !== formData.ConfirmPassword
    ) {
      newErrors.ConfirmPassword = "The password confirmation does not match.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    axios
      .post(
        "https://strapi.arvanschool.ir/api/auth/local/register",
        {
          username: formData.UserName,
          email: `${formData.UserName}@gmail.com`,
          password: formData.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log("ثبت‌نام موفق:", res.data);

        setFormData({
          UserName: "",
          password: "",
          ConfirmPassword: "",
        });
        navigate("/");

        setErrors({});
      })
      .catch((error) => {
        console.error("خطا در ثبت‌نام:", error.response?.data || error.message);
        alert(
          error.response?.data?.error?.message || "ثبت‌نام با خطا مواجه شد."
        );
      });
  };

  const handelChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <form
      onSubmit={handlerPost}
      className="bg-[#0F284C]  sm:w-full  h-[844px]  flex  flex-col  items-center  justify-center"
    >
      <h1 className=" text-[30px]  text-[#CAF7FF]  font-bold  mb-14">
        Create Account
      </h1>

      <div className=" w-[284px]  h-32">
        <div
          className={` flex  border-b-2  p-2 ${
            errors.UserName ? "border-red-500" : "border-[#CAF7FF]"
          }`}
        >
          <img
            src="/src/assets/images/user 2.png"
            alt="user"
            className=" mr-2"
          />
          <input
            type="text"
            placeholder="UserName"
            className=" bg-transparent  text-xl  font-normal  text-[#CAF7FF]  placeholder-[#CAF7FF]  flex-1  w-72  outline-none"
            autoComplete="on"
            value={formData.UserName}
            onChange={handelChange}
            name="UserName"
          />
        </div>
        {errors.UserName && (
          <p className="text-red-500 text-sm mt-1">{errors.UserName}</p>
        )}

        <div
          className={` flex  border-b-2  mt-6  p-2 ${
            errors.password ? "border-red-500" : "border-[#CAF7FF]"
          }`}
        >
          <img
            src="/src/assets/images/unlock 1.png"
            alt="unlock"
            className=" mr-2"
          />
          <input
            type="password"
            placeholder="Password"
            className=" bg-transparent  text-xl  font-normal  text-[#CAF7FF]  placeholder-[#CAF7FF]  flex-1  w-72  outline-none"
            autoComplete="on"
            value={formData.password}
            onChange={handelChange}
            name="password"
          />
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}

        <div
          className={` flex  border-b-2  mt-6  p-2 ${
            errors.ConfirmPassword ? "border-red-500" : "border-[#CAF7FF]"
          }`}
        >
          <img
            src="/src/assets/images/unlock 1.png"
            alt="unlock"
            className=" mr-2"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className=" bg-transparent  text-xl  font-normal  text-[#CAF7FF]  placeholder-[#CAF7FF]  flex-1  w-72  outline-none"
            autoComplete="on"
            value={formData.ConfirmPassword}
            onChange={handelChange}
            name="ConfirmPassword"
          />
        </div>
        {errors.ConfirmPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.ConfirmPassword}</p>
        )}
      </div>

      <div className=" flex  mt-44  gap-1.5  items-baseline  flex-col">
        <div className=" flex  gap-1.5  items-center">
          <button
            type="button"
            onClick={() => setEnabled(!enabled)}
            className={` flex  items-center  w-14  h-8  rounded-full  transition-colors  px-1 ${
              enabled ? " bg-cyan-600" : " bg-[#CAF7FF]"
            }`}
          >
            <span
              className={` w-6  h-6  rounded-full  bg-[#0F284C]  shadow-md  transform  transition-transform ${
                enabled ? " translate-x-6" : " translate-x-0"
              }`}
            />
          </button>
          <button
            type="button"
            className=" text-[#CAF7FF]  text-xl  font-normal"
          >
            Turn on Location
          </button>
        </div>
        <button
          type="submit"
          className=" w-[279px]  h-12  rounded-[20px]  mt-6  bg-[#00DFC5]  text-xl  font-bold  text-[#0F284C]"
        >
          Register
        </button>
      </div>

      <p className=" text-[18px]  font-normal  text-[#CAF7FF]  mt-11">
        or
      </p>

      <div className=" mt-10  flex  gap-6  items-center">
        <button>
          <img src="/src/assets/images/Google.png" alt="google" />
        </button>
        <button>
          <img src="/src/assets/images/Facebook.png" alt="Facebook" />
        </button>
        <button>
          <img src="/src/assets/images/Twitter.png" alt="twitter" />
        </button>
      </div>
    </form>
  );
}
