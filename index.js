const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json());

app.get("/user", (req, resp)=>{
    resp.send({
        users:{
                 name: "Shambhusaran Parajuli",
            age: "22",
            address: "Pokhara"
        }
    })

})

app.get("/product", (req, resp)=>{
    resp.send({
        users:{
                 name: "Product A",
            price: "2200"
        }
    })

})

app.listen(4040,  ()=>{
    console.log("Server is running")
    console.log("on port 4040")
    console.log("http://localhost:4040")
})