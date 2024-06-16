import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { darkLogo } from "../assets/index";
import { SERVER_URL } from "../constants";

const Signin = () => {
  // State variables for user input and error handling
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [apiErr, setApiErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  // Event handlers for input fields
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  // Function to handle user login
  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation checks for email and password
    if (!email) {
      setErrEmail("Enter your email");
    }
    if (!password) {
      setErrPassword("Enter your password");
    }

    // If email and password are provided, proceed with login
    if (email && password) {
      setLoading(true);
      setApiErr("");
      try {
        const response = await fetch(`${SERVER_URL}/api/user/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          throw new Error('Login failed');
        }

        const data = await response.json();
        console.log('Login successful:', data);
        setLoading(false);
        setSuccessMsg("Login Successful");
        navigate("/")
        setEmail("");
        setPassword("");
      } catch (error) {
        console.error('Error:', error);
        setApiErr('Login failed');
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Sign-in form */}
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Link to="/">
              <img className="mx-auto h-12 w-auto" src={darkLogo} alt="darkLogo" />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          {/* Form for email and password */}
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              {/* Email field */}
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={handleEmail}
                  value={email}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                {/* Error message for email field */}
                {errEmail && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-1.5">
                    <span className="italic font-extrabold text-base">!</span>
                    {errEmail}
                  </p>
                )}
              </div>
              {/* Password field */}
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={handlePassword}
                  value={password}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                {/* Error message for password field */}
                {errPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-1.5">
                    <span className="italic font-extrabold text-base">!</span>
                    {errPassword}
                  </p>
                )}
              </div>
            </div>
            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {loading ? "Loading..." : "Continue"}
              </button>
            </div>
          </form>

          {/* Additional links */}
          <div className="text-center text-sm text-gray-600">
            <p>
              By continuing, you agree to Etsy's{" "}
              <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Conditions of Use
              </Link>{" "}
              and{" "}
              <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Privacy Notice
              </Link>.
            </p>
            {/* Help link */}
            <p className="mt-4">
              <ArrowRightIcon className="inline-block mr-1" />{" "}
              <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Need help?
              </Link>
            </p>
          </div>

          {/* Registration link */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">
                  New to Etsy?
                </span>
              </div>
            </div>
            {/* Button to navigate to registration page */}
            <Link to="/registration">
              <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4">
                Create your Etsy account
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full bg-gray-100 py-6 flex flex-col items-center">
        <div className="flex space-x-6">
          <Link to="#" className="text-xs text-indigo-600 hover:text-indigo-500">
            Conditions of Use
          </Link>
          <Link to="#" className="text-xs text-indigo-600 hover:text-indigo-500">
            Privacy Notice
          </Link>
          <Link to="#" className="text-xs text-indigo-600 hover:text-indigo-500">
            Help
          </Link>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          © 2023 Etsy, Inc. or its affiliates
        </p>
      </footer>
    </div>
  );
};

export default Signin;
