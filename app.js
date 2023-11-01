const express = require('express');
const app = express()

app.get("/",(req, resp)=>{
    resp.json({message:"Hello Backend"})
})

app.listen(3000);