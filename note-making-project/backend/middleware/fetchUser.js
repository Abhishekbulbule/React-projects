const jwt = require("jsonwebtoken");
const JWT_SECRET = "Thisisasecret";

const fetchUser=(req,res,next)=>{
    //get the user from the jwt token and add id to req object
    //get auth-token from header and check if valid or not
    const token = req.header('auth-token');
    if(!token){
       return res.status(401).send({error:"please authenticate using valid token"});
    }
    try {
        const data = jwt.verify(token,JWT_SECRET);
        req.user = data.user;
        
        //next will call the next function
        //ie async function use in the route in which this middleware is used
        next();
    } catch (error) {
        return res.status(401).send({error:"please authenticate using valid token"});
    }

}

module.exports = fetchUser;