import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// Protect route - Verify the token and get the de-encrypted payload to compare
const protect = asyncHandler(async (req, res, next) => {
  // Get the jwt from req
  let token = req.cookies.jwt;

  // Verify the token
  if (token) {
    // decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // extract the user object and search for the user, then add into request
    req.user = await User.findById(decoded.userId).select('-password');
    next();
    try {
    } catch (error) {
      res.status(401);
      throw new Error('Not authorised, invalid token');
    }
  } else {
    res.status(401);
    throw new Error('Not authorised, no token');
  }
});

export { protect };
