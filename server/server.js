const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const url = "mongodb://dbUserTugas:Pass_db_User@paw-kelompok-2-shard-00-00.wmcaw.mongodb.net:27017,paw-kelompok-2-shard-00-01.wmcaw.mongodb.net:27017,paw-kelompok-2-shard-00-02.wmcaw.mongodb.net:27017/paw-kelompok-2?ssl=true&replicaSet=atlas-axkbzb-shard-0&authSource=admin&retryWrites=true&w=majority";

const Queue = require('./models/Queue');
const Patients = require('./models/Patients');

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(url,{useNewUrlParser:true})
    .then(console.log('Connected to DB'))
    .catch(err => console.log(err));

//Create localhost:3000
app.listen(process.env.PORT || 5000);

//GET queue
app.get('/api/queue',async(req,res)=>{
    const queueItems = await Queue.find()
        .catch(err => res.send(err));
    res.send(queueItems);
});

//POST queue
app.post('/api/queue',(req,res)=>{
    var newQueue = new Queue({
        _id: new mongoose.Types.ObjectId(),
        date: req.body.date,
        ownerName: req.body.ownerName,
        petName: req.body.petName,
        petType: req.body.petType,
        homeAddress: req.body.homeAddress,
        phoneNumber: req.body.phoneNumber
    });
    newQueue.save()
    .then(result => {
        if(result.name != "ValidationError"){
            res.send("Create successful")
        } else {
            res.send(result)
        };
    })
    .catch(err=>{
        res.send(err)
    });
});

//PUT queue
app.put('/api/queue', (req,res)=>{
    updates = req.body;
    Queue.findOneAndUpdate({_id:req.body._id}, {$set: updates}, {new : true})
        .then(res.send("Update successful"))
        .catch(err=>{
            res.send(err)
        });
});

//DELETE queue
app.delete('/api/queue', (req,res)=>{
    Queue.findByIdAndRemove(req.body._id)
        .then(res.send("Delete successful"))
        .catch(err=>{
            res.send(err)
        });
});

//GET patient
app.get('/api/patients',async(req,res)=>{
    const patientItems = await Patients.find()
        .catch(err => res.send(err));
    res.send(patientItems);
});

// POST Patients
app.post('/api/patients', (req,res)=>{
    var newPatients = new Patients({
        _id: new mongoose.Types.ObjectId(),
        ownerName: req.body.ownerName,
        petName: req.body.petName,
        petType: req.body.petType,
        homeAddress: req.body.homeAddress,
        phoneNumber: req.body.phoneNumber,
        description: req.body.description,
        currentTreatments: req.body.currentTreatments
    });
    newPatients.save()
        .then(result => {
            if(result.name != "ValidationError"){
                res.send("Create successful")
            } else {
                res.send(result)
            };
        })
        .catch(err =>{
            res.send(err)
        });
});

// PUT Patients
app.put('/api/patients',async(req,res)=>{
    await Patients.findOneAndUpdate({_id: req.body._id},{$set: req.body})
    .then(res.send("Update successful"))
    .catch(err=>{
        res.send(err)
    });
});


// DELETE Patients
app.delete('/api/patients', (req, res) => {
    Patients.findByIdAndRemove(req.body._id)
        .then(res.send("Delete successful"))
        .catch(err=>{
            res.send(err)
        });
});
