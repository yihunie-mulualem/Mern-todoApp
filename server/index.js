const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv").config();
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors());
const PORT=5000;

const todoItemRoute=require("./route/todoItem.js");
mongoose.connect("mongodb://127.0.0.1:27017/todo")
.then(()=>
console.log("database connected"))
.catch(err=>console.log(err));

app.use("/",todoItemRoute);
app.listen(PORT,()=>
console.log("server connected")
);