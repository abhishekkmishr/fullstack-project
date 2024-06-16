// import User from "../models/user.model.js"
// import { creatToken } from "../utilities/jwt.js"



// const register = async (req,res) => {
//     try {
//         const {name, email, password} = req.body
//         const user = await User.create({
//             name,
//             email,
//             password
//         })
//         return res .status (201).send({message: "User registration successfull "})
//     } catch (error) {
//        return res.status(500).send({message : "Error registering user",error : error.message}) 
//     }
// }

// const login = async (req, res) => {
//     try {
//         const {email,password} = req.body
//         const user = await User.findOne({email})
//         if (!user){
//             return res.status(400).send({message : "invalid Carendecial"})
//         }

//         const passwordMatch = await user.matchPassword(password)
//         if (!passwordMatch){
//             return res.status(400).send({message : "invalid password"})
//         }

//         const token = creatToken({id : user._id})
//         res.cookie("authToken",token,{
//             path : "/",
//             expires : new Date(Date.now() + 3600000),
//             httpOnly : true,
//             secure : true,
//             sameSite:"None"
//     })

//         return res.status(200).send({message:"User logged successfully",token})

//     } catch (error) {
//         return res.status(500).send({message : "Error in loging the user",error : error.message}) 

//     }
// }

// const logout = async (req,res) =>{
//     res.clearCookies("authToken")
//     return res.status(200).send({message : "User logged out successfully"})
// }

// const deleteUser = async (req,res)=>{
//     try {
//         const {id} = req.params
//         const user = await User.findByIdAndDelete(id)
//         if(!user){
//             return res.status(404).send({message : "User not found"})
//         }
//         return res.status(200).send({message : "user deleted successfylly"})
//     } catch (error) {
//         return res.status(200).send({message : "Error in deleting the user",error:error.message})
//     }
// }

// export {
//     register,
//     login,
//     logout,
//     deleteUser
// }













import User from "../models/user.model.js";
import { createToken } from "../utilities/jwt.js";

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.create({
            username,
            email,
            password
        });
        return res.status(201).send({ message: "User registration successful" });
    } catch (error) {
        return res.status(500).send({ message: "Error registering user", error: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send({ message: "Invalid credentials" });
        }

        const passwordMatch = await user.matchPassword(password);
        if (!passwordMatch) {
            return res.status(400).send({ message: "Invalid password" });
        }

        const token = createToken({ id: user._id });
        res.cookie("authToken", token, {
            path: "/",
            expires: new Date(Date.now() + 3600000), // 1 hour
            httpOnly: true,
            secure: true,
            sameSite: "None"
        });

        return res.status(200).send({ message: "User logged in successfully", token });

    } catch (error) {
        return res.status(500).send({ message: "Error logging in the user", error: error.message });
    }
}

const logout = async (req, res) => {
    res.clearCookie("authToken", {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "None"
    });
    return res.status(200).send({ message: "User logged out successfully" });
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        return res.status(200).send({ message: "User deleted successfully" });
    } catch (error) {
        return res.status(500).send({ message: "Error deleting the user", error: error.message });
    }
}

export {
    register,
    login,
    logout,
    deleteUser
}
