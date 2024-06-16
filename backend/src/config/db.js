import mongoose from "mongoose"

const connectDB = async ()=> {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to DB")
    } catch (error) {
        console.log("error connection to DB",error)
    }
}


export default connectDB