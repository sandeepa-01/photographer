import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";  // Import axios to make HTTP requests
import mailicon from "../../assets/icon 1.png";
import profileicon from "../../assets/icon 2.png";
import lockicon from "../../assets/icon 3.png";
import Bgvideo from "../../Components/background/Bgvideo";

function Signin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { username, email, password, role };

    try {
      // Send data to the backend
      const response = await axios.post("http://localhost:5000/register", userData);
      console.log("User registered:", response.data);
      
      // Set registration success to true
      setRegistrationSuccess(true);
      
      // Reset form fields
      setUsername("");
      setEmail("");
      setPassword("");
      setRole("");
      
      // Refresh the page after 2 seconds
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      
    } catch (error) {
      console.error("Registration failed:", error.response?.data?.error);
    }
  };

  return (
    <div>
      <Bgvideo />
      <div className="h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-4xl flex rounded-xl shadow-2xl overflow-hidden">
          {/* Right side section */}
          <div className="w-3/5 p-12 flex flex-col border-l glass">
            <h2 className="text-3xl font-bold text-white text-center mb-10">Registration</h2>
            
            {/* Success message */}
            {registrationSuccess && (
              <div className="mb-6 p-3 bg-green-500 text-white rounded-lg text-center">
                User register complete. Please login.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>  {/* Form Submission */}
              <div className="mb-6">
                <div className="bg-gray-100/10 border-2 border-purple-500 rounded-lg flex items-center p-3">
                  <input
                    type="text"
                    placeholder="User name"
                    className="bg-transparent text-white w-full outline-none"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <img src={profileicon} alt="profile icon" className="w-3" />
                </div>
              </div>

              <div className="mb-6">
                <div className="bg-gray-100/10 border-2 border-purple-500 rounded-lg flex items-center p-3">
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-transparent text-white w-full outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <img src={mailicon} alt="email icon" className="w-3" />
                </div>
              </div>

              <div className="mb-6">
                <div className="bg-gray-100/10 border-2 border-purple-500 rounded-lg flex items-center p-3">
                  <input
                    type="password"
                    placeholder="Password"
                    className="bg-transparent text-white w-full outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <img src={lockicon} alt="lock icon" className="w-3" />
                </div>
              </div>

              {/* Role Selection */}
              <div className="mb-6">
                <div className="bg-gray-100/10 border-2 border-purple-500 rounded-lg flex items-center p-3">
                  <select
                    className="bg-transparent text-white w-full outline-none appearance-none"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="" disabled className="text-black">
                      Select Role
                    </option>
                    <option value="client" className="text-black">
                      Client
                    </option>
                    <option value="photographer" className="text-black">
                      Photographer
                    </option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-[#850FFD] to-[#DF10FD] hover:opacity-90 transition-opacity duration-300 text-white font-semibold py-3 px-4 rounded-lg mb-8 cursor-pointer"
              >
                Register
              </button>
            </form>

            <div className="mt-auto flex justify-center">
              <img src="logo-white.png" alt="" className="w-50" />
            </div>
          </div>

          {/* Left side section */}
          <div className="w-2/5 bg-gradient-to-r from-[#850FFD] to-[#DF10FD] p-8 flex flex-col items-center justify-center text-white relative">
            <div className="absolute">
              <h1 className="text-3xl font-bold mb-4">Welcome Back !</h1>
              <p className="mb-8">Already have an account?</p>
              <button className="border-2 border-white bg-transparent text-white font-semibold py-2 px-8 rounded-full cursor-pointer">
                <Link to="/login">Login</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;