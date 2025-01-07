const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

const mongoURI = 'mongodb://localhost:27017/Routine_Tracker_People';

// Parsing JSON request bodies
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware
app.use(express.json());
/*
// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected...');
  })
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Define a Mongoose Schema
const Profile = new mongoose.Schema({
    Person: {type: String},
    cek:{ type: String, default : null },
    time: { type: String, default : null }
});
const Person = mongoose.model('Profile', Profile);


let localstuff = [];
let orang = [];


app.post('/api/data', async(request, response)=>{
    
    //Received request
    const receivedData = request.body;
    const newItem = new Item(receivedData);

    localstuff.push(receivedData); // Store each body in an array

    const savedItem = await newItem.save();

    const data = {
        message: 'Data received successfully',
        received: receivedData // Echo back the received data
    };
    console.log(data);
    
    response.status(201).json(savedItem); // Respond with a JSON object to confirm receipt of the data
});

app.post('/Profile', async(request, response)=>{
    
    //Received request
    const ProfileData = request.body;
    const newPerson = new Person(ProfileData);

    orang.push(ProfileData); // Store each body in an array

    const savedPerson = await newPerson.save();

    const data = {
        message: 'Data received successfully',
        received: ProfileData // Echo back the received data
    };
    console.log(data);
    
    response.status(201).json(savedPerson); // Respond with a JSON object to confirm receipt of the data
});


app.get('/api/data', function(request, response) {
    //Received request
    response.send(localstuff); // 201 Created status
});

app.get('/Profile', function(request, response) {
    //Received request
    response.send(orang); // 201 Created status
});

app.get('/Profile/:person', async (req, res) => {
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
    Item.find({}).then(function(users) {
        res.json(users)
    });
})
*/


//Experiment

//LISTEN
app.listen(port, function(){
  console.log("First API running on port "+ port);
});