import jwt from 'jsonwebtoken';
import User from '../models/user-model.js'; // Adjust this path if necessary

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({ message: "Unauthorized, Token not provided" });
    }

    const jwtToken = token.replace("Bearer", "").trim();
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    console.log("Verified User:", isVerified);

    const userData = await User.findOne({ email: isVerified.email }).select('-password');
    
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    req.token = jwtToken;
    req.user = userData;
    req.userID = userData._id;

    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }
};

export default authMiddleware;
