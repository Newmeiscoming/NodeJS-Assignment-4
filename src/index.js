const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
// app.use(express.urlencoded());


// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', './views');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.send("Hello world!");
})


app.get("/form", (req, res) => {
    // res.send("Ok");
    res.render("form.ejs");
})

app.post("/add",(req,res)=>{
    var num1 = (req.body.num1);
    var num2 = (req.body.num2);

    if(num1==="" || num2===""){
        res.status(200).send({
            status:"failure"
        })
    }
    else if(isNaN(num1) || isNaN(num2)){
        res.status(200).send({
            status:"error",
            message: "Invalid data types"
        })
    }
    else if(Number(num1)<-1*1000000 || Number(num2)<-1*1000000 || Number(num1)+Number(num2)<-1*1000000){
        res.status(200).send({
            status:"error",
            message:"underflow"
        })
    }
    else if(Number(num1)>1000000 || Number(num2)>1000000 || Number(num1)+Number(num2)>1000000){
        res.status(200).send({
            status:"error",
            message:"overflow"
        })      
    }else{
        res.status(200).send({
            status:"success",
            message:"the sum of given two numbers",
            sum:Number(num1)+Number(num2)
        }  )
    }
})

app.post("/sub",(req,res)=>{
    var num1 = (req.body.num1);
    var num2 = (req.body.num2);
    if(num1==="" || num2===""){
        res.status(200).send({
            status:"failure"
        })
    }
    else if(isNaN(num1) || isNaN(num2)){
        res.status(200).send({
            status:"error",
            message: "Invalid data types"
        })
    }

    else if(Number(num1)<-1*1000000 || Number(num2)<-1*1000000 || Number(num1)-Number(num2)<-1*1000000){
        res.status(200).send({
            status:"error",
            message:"underflow"
        })
    }

    else if(Number(num1)>1000000 || Number(num2)>1000000 || Number(num1)+Number(num2)>1000000){
        res.status(200).send({
            status:"error",
            message:"overflow"
        })
    }else{
        res.status(200).send({
            status:"success",
            message:"the difference of given two numbers",
            sum:Number(num1)-Number(num2)
        })
    }
})

app.post("/multiply",(req,res)=>{
    var num1 = (req.body.num1);
    var num2 = (req.body.num2);

    if(num1==="" || num2===""){
        res.status(200).send({
            status:"failure"
        })
    }

    else if(isNaN(num1) || isNaN(num2)){
        res.status(200).send({
            status:"error",
            message: "Invalid data types"
        })
    }

    else if(Number(num1)<-1000000 || Number(num2)<-1000000 || Number(num1)*Number(num2)<-1000000){
        res.status(200).send({
            status:"error",
            message:"underflow"
        })
    }

    else if(Number(num1)>1000000 || Number(num2)>1000000 || Number(num1)+Number(num2)>1000000){
        res.status(200).send({
            status:"error",
            message:"overflow"
        })
    }else{
        res.status(200).send({
            status:"success",
            message:"the product of given numbers",
            sum:Number(num1)*Number(num2)
        })
    }
})

app.post("/divide",(req,res)=>{
    var num1 = (req.body.num1);
    var num2 = (req.body.num2);

    if(num1==="" || num2===""){
        res.status(200).send({
            status:"failure"
        })
    }
    else if(num2==="0"){
        res.status(200).send({
            status:"error",
            message: "Cannot divide by zero"
        })
    }
    else if(isNaN(num1) || isNaN(num2)){
        res.status(200).send({
            status:"error",
            message: "Invalid data types"
        })
    }
    else if(Number(num1)<-1*1000000 || Number(num2)<-1*1000000 || Number(num1)/Number(num2)<-1*1000000){
        res.status(200).send({
            status:"error",
            message:"underflow"
        })
    }
    else if(Number(num1)>1000000 || Number(num2)>1000000 || Number(num1)+Number(num2)>1000000){
        res.status(200).send({
            status:"error",
            message:"overflow"
        })
    }else{
        res.status(200).send({
            status:"success",
            message:"the division of given numbers",
            sum:Number(num1)/Number(num2)
        })
    }
})

app.listen(port, () => console.log(`App listening on port ${port}!`));
module.exports = app;