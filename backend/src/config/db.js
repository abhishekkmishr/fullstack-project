// Import the mongoose library to interact with MongoDB
import mongoose from "mongoose"

// Define an asynchronous function to connect to the MongoDB database
const connectDB = async () => {
    try {
        // Attempt to connect to the MongoDB database using the connection string from environment variables
        await mongoose.connect(process.env.MONGODB_URI)
        
        // Log a success message if the connection is successful
        console.log("Connected to DB")
    } catch (error) {
        // Log an error message if the connection fails
        console.log("Error connecting to DB", error)
    }
}

// Export the connectDB function as the default export of this module
export default connectDB
