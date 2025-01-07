const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

const mongoURI = 'mongodb://localhost:27017/Remidi';


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected...');
  })
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Define a Mongoose Schema
const Data = new mongoose.Schema({
    Number: {type: String},
});
const dataStored = mongoose.model('Data', Data);


let Webstorage = [];

app.post('/Data', async(request, response)=>{
    
    //Received request
    const Data = request.body;
    const newNumber = new dataStored(Data);

    Webstorage.push(Data); // Store each body in an array

    const savedNumber = await newNumber.save();

    const respons = {
        message: 'Data received successfully',
        received: Data // Echo back the received data
    };
    console.log(respons);
    
    response.status(201).json(savedNumber); // Respond with a JSON object to confirm receipt of the data
});

app.get('/Data', function(request, response) {
    //Received request
    response.send(Webstorage); // 201 Created status
});

app.get('/Data/:person', async (req, res) => {
    const personName = req.params.person;

    try {
        // Find the specific profile by name
        const profile = await Person.findOne({ Person: personName });

        if (profile) {
            res.status(200).json(profile);
        } else {
            res.status(404).json({ message: 'Profile not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the profile' });
    }
});

//Ambil ke mongo
app.get('/getmongo', function(req, res) {
    dataStored.find({}).then(function(users) {
        res.json(users)
    });
})



//Experiment

//LISTEN
app.listen(port, function(){
  console.log("First API running on port "+ port);
});