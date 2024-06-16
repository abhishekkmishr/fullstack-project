


import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { darkLogo } from "../assets/index";

const Registration = () => {
  // State variables for user input and error handling
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");
  const [apiErr, setApiErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // Event handlers for input fields
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setErrCPassword("");
  };

  // Function to validate email format
  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // Function to handle user registration
  const handleRegistration = async (e) => {
    e.preventDefault();

    // Validation checks for each input field
    let valid = true;
    if (!clientName) {
      setErrClientName("Enter your name");
      valid = false;
    }
    if (!email) {
      setErrEmail("Enter your email");
      setApiErr("");
      valid = false;
    } else if (!emailValidation(email)) {
      setErrEmail("Enter a valid email");
      valid = false;
    }
    if (!password) {
      setErrPassword("Enter your password");
      valid = false;
    } else if (password.length < 6) {
      setErrPassword("Passwords must be at least 6 characters");
      valid = false;
    }
    if (!cPassword) {
      setErrCPassword("Confirm your password");
      valid = false;
    } else if (cPassword !== password) {
      setErrCPassword("Password not matched");
      valid = false;
    }

    // If all validations pass, proceed with user creation
    if (valid) {
      setLoading(true);
      setApiErr("");
      try {
        const response = await fetch('http://localhost:8080/api/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
            username: clientName,
          }),
        });

        if (!response.ok) {
          throw new Error('Registration failed');
        }

        const data = await response.json();
        console.log('Registration successful:', data);
        setLoading(false);
        setSuccessMsg("Account Created Successfully");
        // Reset form fields and error messages
        setClientName("");
        setEmail("");
        setPassword("");
        setCPassword("");
        setErrCPassword("");
      } catch (error) {
        console.error('Error:', error);
        setApiErr('Registration failed');
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Registration form */}
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Link to="/">
              <img className="mx-auto h-12 w-auto" src={darkLogo} alt="darkLogo" />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create Account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleRegistration}>
            {/* Input fields */}
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="client-name" className="sr-only">
                  Your name
                </label>
                <input
                  id="client-name"
                  name="name"
                  type="text"
                  onChange={handleName}
                  value={clientName}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your name"
                />
                {/* Error message for name field */}
                {errClientName && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-1.5">
                    <span className="italic font-extrabold text-base">!</span>
                    {errClientName}
                  </p>
                )}
              </div>
              {/* Email field */}
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  onChange={handleEmail}
                  value={email}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                {/* Error message for email field */}
                {errEmail && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-1.5">
                    <span className="italic font-extrabold text-base">!</span>
                    {errEmail}
                  </p>
                )}
                {/* API error message */}
                {apiErr && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-1.5">
                    <span className="italic font-extrabold text-base">!</span>
                    {apiErr}
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
                  onChange={handlePassword}
                  value={password}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
              {/* Confirm password field */}
              <div>
                <label htmlFor="c-password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="c-password"
                  name="cPassword"
                  type="password"
                  onChange={handleCPassword}
                  value={cPassword}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Re-enter Password"
                />
                {/* Error message for confirm password field */}
                {errCPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-1.5">
                    <span className="italic font-extrabold text-base">!</span>
                    {errCPassword}
                  </p>
                )}
              </div>
            </div>
            {/* Password length requirement */}
            <p className="text-xs text-gray-600">
              Passwords must be at least 6 characters.
            </p>
            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {loading ? "Loading..." : "Continue"}
              </button>
            </div>
            {/* Loading indicator and success message */}
            {successMsg && <p className="text-center text-green-500">{successMsg}</p>}
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
            <p className="mt-2">
              Already have an account?{" "}
              <Link to="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign in <ArrowRightIcon className="inline-block" />
              </Link>
            </p>
            <p className="mt-2">
              Buying for work?{" "}
              <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Create a free business account
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-50 py-6">
        <div className="flex justify-center space-x-6">
          <Link to="#" className="text-xs text-gray-500 hover:text-gray-900">
            Conditions of Use
          </Link>
          <Link to="#" className="text-xs text-gray-500 hover:text-gray-900">
            Privacy Notice
          </Link>
          <Link to="#" className="text-xs text-gray-500 hover:text-gray-900">
            Help
          </Link>
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">
          © 1996-2024, YourCompany.com, Inc. or its affiliates
        </p>
      </footer>
    </div>
  );
};

export default Registration;