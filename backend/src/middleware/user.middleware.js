// import { verifyToken } from "../utilities/jwt.js"



// const authentication = async (req,res,next)=>{
//     try {
//         const token = req.cookies.authToken
//         if(!token){
//             return res.status(401).send({message:"Unauthorized" })
//         }
//         const decoded = verifyToken(token)
//         console.log("Decoded",decoded)
//         next()
//     } catch (error) {
//         return res.status(500).send({message : "Error in authentication the user",error : error.message})
//     }
// }

// // export {
// //     authentication
// // }


// export default authentication







import { verifyToken } from "../utilities/jwt.js";

const authentication = async (req, res, next) => {
  try {
    const token = req.cookies.authToken;
    if (!token) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    const decoded = verifyToken(token);
    console.log("Decoded", decoded);
    // Assuming the token contains user ID in decoded object
    req.user = { id: decoded._id };
    next();
  } catch (error) {
    return res.status(500).send({ message: "Error in authenticating the user", error: error.message });
  }
};

export default authentication;
