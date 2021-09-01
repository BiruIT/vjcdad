const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Aircraft = new Schema({
    registration: { type: String },
    msn: { type: Number },
    fsn: { type: Number },
    model: { type: String },
    engine: { type: String },
    apu: { type: String },
    capacity: { type: String },
    mtow: { type: String },
    tirepress: { type: String },
    owner: { type: String },
});

module.exports = mongoose.model('aircraft', Aircraft);
