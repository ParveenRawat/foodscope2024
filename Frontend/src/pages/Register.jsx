import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from 'axios'

function Register() {


  const navigate = useNavigate();
// all input field variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // redirect user to homepage if already logged in
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  // form submit function to register user
  const registerUser = async (e) => {
    e.preventDefault();
    try {
      if(password !== confirmPassword){
        toast.error("Passwords dont match.")
      }else{
      // sending post request containing name,email and password to the /register endpoint and destructuring the response to the data variable.
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (data.error) { 
        toast.error(data.error); //if response returns an error
      } else { //redirecting to login page
        setEmail("");
        setName("");
        setPassword("");
        toast.success("Registration Success :D");
        navigate("/login");
      }}
    } catch (error) {
      console.log(error);//logging error
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFF9ED] p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full border border-gray-200">
            <h2 className="text-2xl font-bold text-[#333333] mb-6 text-center">Sign Up</h2>

            <form onSubmit={registerUser}>
                <div className="mb-4">
                    <label className="block text-[#4D5D4B] font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="w-full p-3 border border-gray-300 rounded bg-[#FFF9ED] text-[#333333] focus:outline-none focus:border-[#A3B9A2]"
                        placeholder="Enter your username"
                        value={name}
            onChange={(e) => setName(e.target.value)}
                    />
                </div>

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
            required
                    />
                </div>

                <div className="mb-4">
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

                <div className="mb-6">
                    <label className="block text-[#4D5D4B] font-bold mb-2" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="w-full p-3 border border-gray-300 rounded bg-[#FFF9ED] text-[#333333] focus:outline-none focus:border-[#A3B9A2]"
                        placeholder="Confirm your password"
                        value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-[#E27D60] text-white font-bold rounded hover:bg-[#C2583A] transition duration-300"
                  
                >
                    Sign Up
                </button>
            </form>
            
            <p className="mt-6 text-center text-[#4D5D4B]">
                Already have an account?{" "}
                <a href="/login" className="font-bold text-[#A3B9A2] hover:text-[#333333]">
                    Login
                </a>
            </p>
        </div>
    </div>
);
}

export default Register