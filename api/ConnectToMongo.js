const mongoose=require('mongoose');

const connectToMongoDB=async()=>{
    try {
        // console.log(process.env.MONGOURL);
        await mongoose.connect(process.env.MONGOURL);
        console.log("Connect to MongoDB successFully");
    } catch (error) {
        console.log("Error While Login",error.message);
    }
}

module.exports=connectToMongoDB;