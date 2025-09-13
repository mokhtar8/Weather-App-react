import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const [errors, setErrors] = useState({}); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const handleLogin = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.identifier) {
      newErrors.identifier = "please enter your username";
    }
    if (!formData.password) {
      newErrors.password = "please enter your password   ";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; 
    }

    axios
      .post(
        "https://strapi.arvanschool.ir/api/auth/local",
        {
          identifier: formData.identifier,
          password: formData.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        localStorage.setItem("token", res.data.jwt);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/");
       
      })
      .catch((err) => {
        const errorMsg = err.response?.data?.error?.message || "خطا در ورود!";
        alert("❌ " + errorMsg);
      });
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-[#0F284C] msx-sm:w-[90px] max-sm:h-[844px] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center"
    >
      <img src="/src/assets/images/logo2.svg" alt="cloud" />

      <div className="max-sm:w-[284px] max-sm:h-32">
        <div
          className={`max-sm:flex max-sm:border-b-2 max-sm:p-2 ${
            errors.identifier ? "border-red-500" : "border-[#CAF7FF]"
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
            name="identifier"
            value={formData.identifier}
            onChange={handleChange}
          />
        </div>
        {errors.identifier && (
          <p className="text-red-500 text-sm mt-1">{errors.identifier}</p>
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
            name="password"
            autoComplete="on"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>

      <div className="max-sm:flex max-sm:mt-10 max-sm:gap-1.5 max-sm:items-center max-md:flex-col">
        <div className="max-sm:flex max-sm:mt-8 max-sm:gap-1.5 max-sm:items-center">
          <input
            type="checkbox"
            className="max-sm:accent-blue-400"
          />
          <p className="max-sm:text-[#CAF7FF] max-sm:text-[16px] max-sm:font-normal">
            Remember My Password
          </p>
        </div>
        <button
          type="submit"
          className="max-sm:w-[279px] max-sm:h-12 max-sm:rounded-[20px] max-sm:mt-14 max-sm:bg-[#00DFC5] max-sm:text-[20px] max-sm:font-bold max-md:text-[#0F284C]"
        >
          Sign In
        </button>
      </div>

      <div className="max-md:mt-10 max-sm:flex max-sm:flex-col max-sm:items-center">
        <button
          type="button"
          className="max-sm:text-base max-md:font-normal max-md:text-[#CAF7FF]"
        >
          Forgot password?
        </button>
        <div className="max-md:flex max-md:gap-1">
          <p className="max-sm:text-base max-md:font-normal max-md:text-[#CAF7FF]">
            Don’t have an account?
          </p>
     <Link to='/SignUp'>   <button
            type="button"
            className="max-sm:text-base max-md:font-normal max-md:text-[#00DFC5]"
          >
            Sign Up
          </button>
     </Link>  
        </div>
      </div>
    </form>
  );
}
