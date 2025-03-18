const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Extract token from the Authorization header
  const token = req.header("Authorization")?.split(" ")[1]; 
  
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    // Verify the token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next(); 
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};
