const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const journalCollection = new Schema({
    editeur: {
        type: String,
        required: true,
    },
    edite: {
        type: String,
        required: true,
    },
    action: {
        type: String,
        enum: ['POST', 'GET', 'DELETE', 'PUT'],
        required: true
    },
    date: string
}, {
    timestamps: true,
});

module.exports = model("JournalModif", journalCollection);
