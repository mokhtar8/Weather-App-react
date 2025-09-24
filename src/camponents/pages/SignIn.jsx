import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedUser = localStorage.getItem("savedUser");
    if (savedUser) {
      const { identifier, password } = JSON.parse(savedUser);
      setFormData({ identifier, password });
      setRememberMe(true);
    }
  }, []);

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
      newErrors.password = "please enter your password";
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

        if (rememberMe) {
          localStorage.setItem(
            "savedUser",
            JSON.stringify({
              identifier: formData.identifier,
              password: formData.password,
            })
          );
        } else {
          localStorage.removeItem("savedUser");
        }

        navigate("Landing");
      })
      .catch((err) => {
        const errorMsg = err.response?.data?.error?.message || "خطا در ورود!";
        // نمایش خطا زیر پسورد
        setErrors({ password: errorMsg });
      });
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-[#0F284C] sm:w-full h-[844px] flex flex-col items-center justify-center"
    >
      <img src="/src/assets/images/logo2.svg" alt="cloud" />

      <div className="w-[284px] h-32">
        {/* Username */}
        <div
          className={`flex border-b-2 p-2 ${
            errors.identifier ? "border-red-500" : "border-[#CAF7FF]"
          }`}
        >
          <img
            src="/src/assets/images/user 2.png"
            alt="user"
            className="mr-2"
          />
          <input
            type="text"
            placeholder="UserName"
            className="bg-transparent text-xl font-normal text-[#CAF7FF] placeholder-[#CAF7FF] flex-1 w-72 outline-none"
            name="identifier"
            value={formData.identifier}
            onChange={handleChange}
          />
        </div>
        {errors.identifier && (
          <p className="text-red-500 text-sm mt-1">{errors.identifier}</p>
        )}

        {/* Password */}
        <div
          className={`flex border-b-2 mt-6 p-2 ${
            errors.password ? "border-red-500" : "border-[#CAF7FF]"
          }`}
        >
          <img
            src="/src/assets/images/unlock 1.png"
            alt="unlock"
            className="mr-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent text-xl font-normal text-[#CAF7FF] placeholder-[#CAF7FF] flex-1 w-72 outline-none"
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

      {/* Remember Me + Sign In */}
      <div className="flex mt-10 gap-1.5 items-center flex-col">
        <div className="flex mt-8 gap-1.5 items-center">
          <input
            type="checkbox"
            className="accent-blue-400"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <p className="text-[#CAF7FF] text-[16px] font-normal">
            Remember My Password
          </p>
        </div>
        <button
          type="submit"
          className="w-[279px] h-12 rounded-[20px] mt-14 bg-[#00DFC5] text-[20px] font-bold text-[#0F284C]"
        >
          Sign In
        </button>
      </div>

      {/* Footer */}
      <div className="mt-10 flex flex-col items-center">
        <button
          type="button"
          className="text-base font-normal text-[#CAF7FF]"
        >
          Forgot password?
        </button>
        <div className="flex gap-1">
          <p className="text-base font-normal text-[#CAF7FF]">
            Don’t have an account?
          </p>
          <Link to="/SignUp">
            <button
              type="button"
              className="text-base font-normal text-[#00DFC5]"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}
