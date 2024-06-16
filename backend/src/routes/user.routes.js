// Import the express library to create a router
import express from "express";
// Import the user controller functions
import { register, login, logout, deleteUser } from "../controllers/user.controller.js";
// Import the authentication middleware
import { authentication } from "../middleware/user.middleware.js";

// Create a new router for handling user-related routes
const userRouter = express.Router();

// Route to handle user registration
// This route handles POST requests to /register and calls the register function
userRouter.post("/register", register);

// Route to handle user login
// This route handles POST requests to /login and calls the login function
userRouter.post("/login", login);

// Route to handle user logout
// This route handles POST requests to /logout and calls the logout function
userRouter.post("/logout", logout);

// Route to handle user deletion
// This route handles DELETE requests to /:id, requires authentication, and calls the deleteUser function
userRouter.delete("/:id", authentication, deleteUser);

// Export the userRouter for use in other parts of the application
export default userRouter;
