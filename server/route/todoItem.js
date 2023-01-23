const router=require("express").Router();
const TodoItemsModel=require("../model/todoItems.js")
router.post("/api/item",async(req,res)=>{
    try{
        const newItem=new TodoItemsModel({
        item:req.body.item
        })
   const saveItem=await newItem.save()
    res.status(200).json("item Added successfully");
    }
    catch(err){
        res.json(err);
    }
})
router.get('/api/get',async(req,res)=>{
    try{
        const allTodoItems=await TodoItemsModel.find({})
        res.status(200).json(allTodoItems)
    }
    catch(err){
        res.json(err);
    }
})
router.put("/api/item/:id",async(req,res)=>{
    try{
const updateItem= await TodoItemsModel.findByIdAndUpdate(req.params.id,{$set:req.body});
 res.status(200).json("Item updated");
    }
    catch(err){
        res.json(err);
    }
})
router.delete("/api/item/:id",async(req,res)=>{
   try{ const deleteItem=await TodoItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json("item Deleted");
   }
   catch(err){
    res.json(err);
   }
})
module.exports=router;