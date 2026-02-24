const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname)));

const mongoURI = 'mongodb+srv://ayan-admin:2025bcla12%40kristujayanti.com@cluster0.c2y9jgu.mongodb.net/ayan-logs?retryWrites=true&w=majority'; 

mongoose.connect(mongoURI)
    .then(() => console.log("Connected to MongoDB! Ayan's Vault is secure."))
    .catch(err => console.error("MongoDB connection error:", err));

const logSchema = new mongoose.Schema({
    message: String,
    date: { type: Date, default: Date.now }
});
const Log = mongoose.model('Log', logSchema);

app.post('/api/message', async (req, res) => {
    try {
        const newLog = new Log({ message: req.body.message });
        await newLog.save();
        res.status(201).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false });
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log("Ayan's Engine running on port " + PORT));