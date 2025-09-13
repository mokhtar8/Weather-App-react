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
      className="bg-[#0F284C] msx-sm:w-[90px] max-sm:h-[844px] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center"
    >
      <h1 className="max-sm:text-[30px] max-sm:text-[#CAF7FF] max-sm:font-bold max-sm:mb-14">
        Create Account
      </h1>

      <div className="max-sm:w-[284px] max-sm:h-32">
        <div
          className={`max-sm:flex max-sm:border-b-2 max-sm:p-2 ${
            errors.UserName ? "border-red-500" : "border-[#CAF7FF]"
          }`}
        >
          <img
            src="/src/assets/images/user 2.png"
            alt="user"
            className="max-sm:mr-2"
          />
          <input
            type="text"
            placeholder="UserName"
            className="max-sm:bg-transparent max-sm:text-xl max-sm:font-normal max-sm:text-[#CAF7FF] max-sm:placeholder-[#CAF7FF] max-sm:flex-1 max-sm:w-72 max-sm:outline-none"
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
          className={`max-sm:flex max-sm:border-b-2 max-sm:mt-6 max-sm:p-2 ${
            errors.password ? "border-red-500" : "border-[#CAF7FF]"
          }`}
        >
          <img
            src="/src/assets/images/unlock 1.png"
            alt="unlock"
            className="max-sm:mr-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="max-sm:bg-transparent max-sm:text-xl max-sm:font-normal max-sm:text-[#CAF7FF] max-sm:placeholder-[#CAF7FF] max-sm:flex-1 max-sm:w-72 max-sm:outline-none"
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
          className={`max-sm:flex max-sm:border-b-2 max-sm:mt-6 max-sm:p-2 ${
            errors.ConfirmPassword ? "border-red-500" : "border-[#CAF7FF]"
          }`}
        >
          <img
            src="/src/assets/images/unlock 1.png"
            alt="unlock"
            className="max-sm:mr-2"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="max-sm:bg-transparent max-sm:text-xl max-sm:font-normal max-sm:text-[#CAF7FF] max-sm:placeholder-[#CAF7FF] max-sm:flex-1 max-sm:w-72 max-sm:outline-none"
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

      <div className="max-sm:flex max-sm:mt-44 max-sm:gap-1.5 max-sm:items-baseline max-md:flex-col">
        <div className="max-sm:flex max-sm:gap-1.5 max-sm:items-center">
          <button
            type="button"
            onClick={() => setEnabled(!enabled)}
            className={`max-md:flex max-md:items-center max-md:w-14 max-md:h-8 max-md:rounded-full max-md:transition-colors max-md:px-1 ${
              enabled ? "max-md:bg-cyan-600" : "max-md:bg-[#CAF7FF]"
            }`}
          >
            <span
              className={`max-md:w-6 max-md:h-6 max-md:rounded-full max-md:bg-[#0F284C] max-md:shadow-md max-md:transform max-md:transition-transform ${
                enabled ? "max-md:translate-x-6" : "max-md:translate-x-0"
              }`}
            />
          </button>
          <button
            type="button"
            className="max-sm:text-[#CAF7FF] max-sm:text-xl max-sm:font-normal"
          >
            Turn on Location
          </button>
        </div>
        <button
          type="submit"
          className="max-sm:w-[279px] max-sm:h-12 max-sm:rounded-[20px] max-sm:mt-6 max-sm:bg-[#00DFC5] max-sm:text-xl max-sm:font-bold max-md:text-[#0F284C]"
        >
          Register
        </button>
      </div>

      <p className="max-sm:text-[18px] max-md:font-normal max-md:text-[#CAF7FF] max-md:mt-11">
        or
      </p>

      <div className="max-md:mt-10 max-sm:flex max-sm:gap-6 max-sm:items-center">
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
