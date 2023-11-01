const express = require('express');
const app = express()

app.get("/",(req, resp)=>{
    resp.json({message:"Hello Anoop2"})
})

app.listen(3000);
