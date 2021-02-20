const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const conDB = require("./db/conn");
const stud = require("../src/models/studs");


app.use(express.json());

conDB();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
      return res.status(200).json({});
    }
    next();
  });
 
app.get("/",async(req,res) => {
   res.send("Get students at /studs");
}) 

app.post("/studs",async(req,res) => {
    try {
        const studRecords = new stud(req.body);
        console.log(req.body);
        const insertStud = await studRecords.save();
        res.send(insertStud);
    } catch (e) {
        res.send(e);
    }
})

app.get("/studs",async(req,res) => {
    try {
        const getStuds = await stud.find({}).sort({"roll" : 1});
        res.send(getStuds);
    } catch (e) {
        res.send(e);
    }
})

app.get("/studs/:id",async(req,res) => {
    try {
        const _id = req.params.id;
        const getStud = await stud.findById(_id);
        res.send(getStud);
    } catch (e) {
        res.send(e);
    }
})

app.patch("/studs/:id",async(req,res) => {
    try {
        const _id = req.params.id;
        const updateStud = await stud.findByIdAndUpdate(_id,req.body,{
            new : true
        });
        res.send(updateStud);
    } catch (e) {
        res.send(e);
    }
})

app.delete("/studs/:id",async(req,res) => {
    try {
        const _id = req.params.id;
        const deleteStud = await stud.findByIdAndDelete(_id);
        res.send(deleteStud);
    } catch (e) {
        res.send(e);
    }
})

app.listen(port,() => {
    console.log(`connection on at p.no ${port}`);
})
