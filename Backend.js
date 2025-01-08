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
    NomorSEP: { type: String },
    NomorKartu: { type: String },
    TglMasuk: { type: String },
    TglPulang: { type: String },
    CaraMasuk: { type: String },
    JenisRawat: { type: String },
    KelasRawat: { type: String },
    AdlSubAcute: { type: String },
    AdlChronic: { type: String },
    IcuIndikator: { type: String },
    IcuLos: { type: String },
    VentilatorJam: { type: String },
    VentilatorUseInd: { type: String },
    VentilatorStartDttm: { type: String },
    VentilatorStopDttm: { type: String },
    UpgradeClassInd: { type: String },
    UpgradeClassClass: { type: String },
    UpgradeClassLOS: { type: String },
    UpgradeClassPayor: { type: String },
    AddPaymentPCT: { type: String },
    BirthWeight: { type: String },
    Sistole: { type: String },
    Diastole: { type: String },
    DischargeStatus: { type: String },
    Diagnosa: { type: String },
    Procedure: { type: String },
    DiagnosaINA_Grouper: { type: String },
    ProcedureINA_Grouper: { type: String },
    ProsedurNonBedah: { type: String },
    ProsedurBedah: { type: String },
    Konsultasi: { type: String },
    TenagaAhli: { type: String },
    Keperawatan: { type: String },
    Penunjang: { type: String },
    Radiologi: { type: String },
    Laboratorium: { type: String },
    PelayananDarah: { type: String },
    Rehabilitasi: { type: String },
    Kamar: { type: String },
    RawatIntensif: { type: String },
    Obat: { type: String },
    ObatKronis: { type: String },
    ObatKemoterapi: { type: String },
    Alkes: { type: String },
    BMHP: { type: String },
    SewaAlat: { type: String },
    PemulasaraanJenazah: { type: String },
    KantongJenazah: { type: String },
    PetiJenazah: { type: String },
    PlastikErat: { type: String },
    DesinfektanJenazah: { type: String },
    MobilJenazah: { type: String },
    DesinfektanMobilJenazah: { type: String },
    COVID19StatusCD: { type: String },
    NomorKartuT: { type: String },
    Episodes: { type: String },
    COVID19CCInd: { type: String },
    COVID19RSDaruratInd: { type: String },
    COVID19CoIncidenseInd: { type: String },
    LabAsamLaktat: { type: String },
    LabProcalcitonin: { type: String },
    LabCRP: { type: String },
    LabKultur: { type: String },
    LabDDimer: { type: String },
    LabPT: { type: String },
    LabAPTT: { type: String },
    LabWaktuPendarahan: { type: String },
    LabAntiHIV: { type: String },
    LabAnalisaGas: { type: String },
    LabAlbumin: { type: String },
    RadThoraxAPPA: { type: String },
    TerapiKonvalesen: { type: String },
    AksesNAAT: { type: String },
    IsomanInd: { type: String },
    BayiLahirStatusCD: { type: String },
    DializerSingleUse: { type: String },
    KantongDarah: { type: String },
    AlteplaseInd: { type: String },
    ApgarMenit1Appearance: { type: String },
    ApgarMenit1Pulse: { type: String },
    ApgarMenit1Grimace: { type: String },
    ApgarMenit1Activity: { type: String },
    ApgarMenit1Respiration: { type: String },
    ApgarMenit5Appearance: { type: String },
    ApgarMenit5Pulse: { type: String },
    ApgarMenit5Grimace: { type: String },
    ApgarMenit5Activity: { type: String },
    ApgarMenit5Respiration: { type: String },
    UsiaKehamilan: { type: String },
    Gravida: { type: String },
    Partus: { type: String },
    Abortus: { type: String },
    OnsetKontraksi: { type: String },
    TarifPoliEks: { type: String },
    NamaDokter: { type: String },
    KodeTarif: { type: String },
    PayorID: { type: String },
    PayorCD: { type: String },
    COB_CD: { type: String },
    CoderNIK: { type: String }
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

app.get('/Data/:numb', async (req, res) => {
    const nsep = req.params.numb;

    try {
        // Find the specific profile by name
        const profile = await dataStored.findOne({ NomorSEP: nsep });

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