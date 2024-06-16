// Import the verifyToken utility function to verify JWT tokens
import { verifyToken } from "../utilities/jwt.js"

// Middleware function for authenticating users
const authentication = async (req, res, next) => {
    try {
        // Get the authToken from cookies
        const token = req.cookies.authToken

        // Check if the token exists
        if (!token) {
            // Send an unauthorized response if no token is found
            return res.status(401).send({ message: "Unauthorized" })
        }

        // Verify the token and decode the payload
        const decoded = verifyToken(token)
        console.log("Decoded", decoded)

        // Proceed to the next middleware or route handler if authentication is successful
        next()
    } catch (error) {
        // Send an error response if there is an issue during authentication
        return res.status(500).send({ message: "Error in authenticating the user", error: error.message })
    }
}

// Export the authentication middleware for use in other parts of the application
export {
    authentication
}


