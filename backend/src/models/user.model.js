// Import mongoose library to interact with MongoDB
import mongoose from "mongoose";
// Import bcrypt library for hashing passwords
import bcrypt from "bcryptjs";

// Define the schema for the User model
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true // username is required
    },
    email: {
        type: String,
        required: true, // email is required
        unique: true // email must be unique
    },
    password: {
        type: String,
        required: true // password is required
    }
},
{
    timestamps: true, // Add createdAt and updatedAt timestamps
    versionKey: false // Disable the __v version key
});

// Pre-save middleware to hash the password before saving the user document
userSchema.pre("save", async function(next) {
    // Check if the password field is modified
    if (!this.isModified("password")) {
        next(); // If not modified, proceed to the next middleware or save function
    }
    try {
        // Generate a salt for hashing the password
        const salt = await bcrypt.genSaltSync(10);
        // Hash the password using the generated salt
        this.password = await bcrypt.hash(this.password, salt);
    } catch (error) {
        // Pass any error to the next middleware or save function
        next(error);
    }
});

// Method to compare the entered password with the hashed password stored in the database
userSchema.methods.matchPassword = async function(enteredPassword) {
    // Compare the entered password with the hashed password
    return await bcrypt.compareSync(enteredPassword, this.password);
}

// Create the User model from the user schema
const User = mongoose.model("User", userSchema);

// Export the User model for use in other parts of the application
export default User;
