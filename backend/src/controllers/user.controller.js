













// Import the User model to interact with the users collection in MongoDB
import User from "../models/user.model.js";
// Import the createToken utility to generate JWT tokens
import { createToken } from "../utilities/jwt.js";

// Handler function for user registration
const register = async (req, res) => {
    try {
        // Extract username, email, and password from the request body
        const { username, email, password } = req.body;

        // Create a new user document in the database
        const user = await User.create({
            username,
            email,
            password
        });

        // Send a success response if the user is created successfully
        return res.status(201).send({ message: "User registration successful" });
    } catch (error) {
        // Send an error response if there is an issue during registration
        return res.status(500).send({ message: "Error registering user", error: error.message });
    }
}

// Handler function for user login
const login = async (req, res) => {
    try {
        // Extract email and password from the request body
        const { email, password } = req.body;

        // Find the user by email in the database
        const user = await User.findOne({ email });
        if (!user) {
            // Send an error response if the user is not found
            return res.status(400).send({ message: "Invalid credentials" });
        }

        // Check if the provided password matches the stored password
        const passwordMatch = await user.matchPassword(password);
        if (!passwordMatch) {
            // Send an error response if the password does not match
            return res.status(400).send({ message: "Invalid password" });
        }

        // Create a JWT token for the authenticated user
        const token = createToken({ id: user._id });

        // Set a cookie with the JWT token
        res.cookie("authToken", token, {
            path: "/",
            expires: new Date(Date.now() + 3600000), // 1 hour
            httpOnly: true,
            secure: true,
            sameSite: "None"
        });

        // Send a success response with the token
        return res.status(200).send({ message: "User logged in successfully", token });

    } catch (error) {
        // Send an error response if there is an issue during login
        return res.status(500).send({ message: "Error logging in the user", error: error.message });
    }
}

// Handler function for user logout
const logout = async (req, res) => {
    // Clear the authToken cookie
    res.clearCookie("authToken", {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "None"
    });

    // Send a success response indicating the user is logged out
    return res.status(200).send({ message: "User logged out successfully" });
}

// Handler function for deleting a user
const deleteUser = async (req, res) => {
    try {
        // Extract the user ID from the request parameters
        const { id } = req.params;

        // Find and delete the user by ID in the database
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            // Send an error response if the user is not found
            return res.status(404).send({ message: "User not found" });
        }

        // Send a success response if the user is deleted successfully
        return res.status(200).send({ message: "User deleted successfully" });
    } catch (error) {
        // Send an error response if there is an issue during deletion
        return res.status(500).send({ message: "Error deleting the user", error: error.message });
    }
}

// Export the handler functions for use in other parts of the application
export {
    register,
    login,
    logout,
    deleteUser
}

