const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const url = "mongodb+srv://dbUserTugas:Pass_db_User@paw-kelompok-2.wmcaw.mongodb.net/paw-kelompok-2?retryWrites=true&w=majority";

const Queue = require('./models/Queue');
const Patients = require('./models/Patients');

app.use(bodyParser.json());
app.use(cors())

mongoose.connect(url,{useNewUrlParser:true})
    .then(console.log('Connected to DB'))
    .catch(err => console.log(err));

//Create localhost:3000
app.listen(3000);

//GET queue
app.get('/queue',async(req,res)=>{
    const queueItems = await Queue.find()
        .catch(err => res.send(err));
    res.send(queueItems);
});

//POST queue
app.post('/queue',(req,res)=>{
    var newQueue = new Queue({
        _id: new mongoose.Types.ObjectId(),
        date: req.body.date,
        time: req.body.time,
        ownerName: req.body.ownerName,
        petName: req.body.petName,
        petType: req.body.petType,
        homeAddress: req.body.homeAddress,
        phoneNumber: req.body.phoneNumber
    });
    newQueue.save()
    .then(_id=>{
        res.send(_id)
    })
    .catch(err=>{
        res.send(err)
    });
});

//PUT queue
app.put('/queue', (req,res)=>{
    console.log(req.body._id)
    updates = req.body
    Queue.findOneAndUpdate({_id:req.body._id}, {$set: updates}, {new : true})
        .then(updatedPatients=>{
            res.send(updatedPatients)
        })
        .catch(err=>{
            res.send(err)
        })
})

//DELETE queue
app.delete('/queue', (req,res)=>{
    console.log(req.body._id)
    Queue.findOneAndDelete({ownerName:req.body._id})
        .then(res.send("Delete successful"))
        .catch(err=>{
            res.send(err)
        })
})


//GET patient
app.get('/patients',async(req,res)=>{
    const patientItems = await Patients.find()
        .catch(err => res.send(err));
    res.send(patientItems);
});

// POST Patients
app.post('/patients', (req,res)=>{
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
        .then(item => {
            res.send("Create Sucessfull")
        })
        .catch(err =>{
            res.send(err)
        });
})

// PUT Patients
app.put('/patients',async(req,res)=>{
    await Patients.findOneAndUpdate({ownerName: req.body._id},{$set: req.body})
    .then(res.send("Update successful"))
    .catch(err=>{
        res.send(err)
    })
});


// DELETE Patients
app.delete('/patients', async(req, res) => {
    const patientItems = await Patients.findOne({ ownerName: req.body._id })
    const deleted = await patientItems.remove()
    .then(res.send("Delete successful"))
    .catch(err=>{
        res.send(err)
    })
})
