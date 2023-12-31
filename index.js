const express = require('express');
require('./config');
const Product = require("./product");

const app = express();
app.use(express.json());

app.post('/create', async (req,res)=>{
    
    let data = new Product(req.body);
    let result = await data.save();
    res.send(result);
});

app.get("/listProducts",async (req,res)=>{
    let data = await Product.find();
    res.send(data);
});

app.delete("/delete/:_id" ,async(req,res)=>{

    console.log(req.params);
    let data = await Product.deleteOne(req.params);
    res.send(data)  
})

app.put("/update/:_id",async (req,res)=>{
console.log(req.params);
let data = await Product.updateOne(
    req.params,{
        $set: req.body
    }
);
res.send(data);
})

app.get("/search/:key",async (req,res)=>{
    console.log(req.params.key);

    let data = await Product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}}
            ]
        }
    );
    
    res.send(data);
});

app.listen(5000,()=>{
    console.log("server is running on 5000")
});