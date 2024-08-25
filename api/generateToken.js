const jwt=require('jsonwebtoken');
const generateToken=(userId,res)=>{
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.cookie("majorUser",token);

}

module.exports=generateToken;