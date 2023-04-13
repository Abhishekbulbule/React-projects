const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const db = connectToMongo();


app.use(cors());
app.use(express.json());
//available
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));


app.get('/', (req,res)=>{
    res.send("helo ");
});



app.listen(port,()=>{
    console.log(`App listening to https://localhost:${port}`);
    
})