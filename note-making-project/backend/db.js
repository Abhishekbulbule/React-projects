const mongoose = require('mongoose');
const mongoURI ="mongodb://127.0.0.1:27017/Notes";

const connectToMongo = async () =>{
    // const db = mongoose.connect(mongoURI)
    // .then((data)=>{console.log("done")})
    // .catch((e)=>{console.error(e)});
    const db = await mongoose.connect(mongoURI);
    
    console.log("done",);
}

module.exports=connectToMongo;