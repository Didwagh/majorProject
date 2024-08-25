// controllers/authController.js
const User = require("../Model/User.js");
const bcrypt=require('bcryptjs')
const generateToken=require('../generateToken.js')

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    // Check if the password matches
    // const isMatch = await user.matchPassword(password);
    const isMatch= await bcrypt.compare(password,user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    generateToken(user._id, res);

    res.status(200).json({message:"Login Successfully"});
   
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


const signup = async (req, res) => {
  try {
    const { name,email, password } = req.body;
    
    const user = await User.findOne({ email });
    console.log(user);
    if (user) {
      return res.status(400).json({ error: "User with Email Already Exist" });
    }
    // Check if the password matches
    // const isMatch = await user.matchPassword(password);
    const salt=await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const newUser=await User.create({
      name,
      // username,
      email,
      password:hashedPassword,
    })
    
    generateToken(newUser._id,res);
    
    res.status(201).json({message:"User Registered Successfully"});

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server error" });
  }
};

module.exports = { login };


module.exports = { login,signup };
