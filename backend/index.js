const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser=require('body-parser');
const Expense=require('./expense');

const app=express();

mongoose.connect(
    "mongodb://localhost:27017/expenses",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
mongoose.connection.on('error',err=>{
    console.log("Something went wrong with database connection");
})
mongoose.connection.on('connected',connected=>{
    console.log("connected to database...");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
      origin: "http://localhost:5173", 
      credentials: true,
    })
  );

app.post('/expense',(req,res)=>{
    const expense=new Expense({
        _id: new mongoose.Types.ObjectId,
        date:req.body.date,
        amount:req.body.amount,
        head:req.body.head,
        tag:req.body.tag,
        note:req.body.note
    })
    expense.save()
    .then(result=>{
        console.log(result);
        res.status(200).json({
        newExpense:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
        error:err
        })
    })
    
})

app.get('/expense',(req,res)=>{
    Expense.find()
    .then(result=>{
        res.status(200).json({
            expenseData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    })
})

app.put('/expense',(req,res)=>{
    const _id=req.body.id;
    Expense.updateOne({_id},{
       $set:{
        date:req.body.date,
        amount:req.body.amount,
        head:req.body.head,
        tag:req.body.tag,
        note:req.body.note
       }
    }).then(result=>{
        console.log(result);
        res.status(200).json({
            updatedData:result
        });
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    })
})

app.get('/',(req,res)=>{
    res.json({
        message:"Server is running!!!"
    })
})


app.listen(4000,()=>{
    console.log("Server has started");
})