import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { setCredentials } from "../redux/slices/authSlice";
import axios from "axios";

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setEmail("");
        setPassword("");
        toast.success("Login Successful!");
        dispatch(setCredentials({ name: data.name, email: data.email }));
        console.log(data)
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFF9ED] p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full border border-gray-200">
        <h2 className="text-2xl font-bold text-[#333333] mb-6 text-center">Login</h2>

        <form onSubmit={loginUser}>
          <div className="mb-4">
            <label className="block text-[#4D5D4B] font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded bg-[#FFF9ED] text-[#333333] focus:outline-none focus:border-[#A3B9A2]"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-[#4D5D4B] font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded bg-[#FFF9ED] text-[#333333] focus:outline-none focus:border-[#A3B9A2]"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#E27D60] text-white font-bold rounded hover:bg-[#C2583A] transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-[#4D5D4B]">
          Don't have an account?{" "}
          <a href="/register" className="font-bold text-[#A3B9A2] hover:text-[#333333]">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;