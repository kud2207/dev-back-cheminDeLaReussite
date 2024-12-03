const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const adminCollection = new Schema(
    {
        nom: String,
        prenom: String,
        age: Number,
        statut: {
            type: String,
            enum: ["admin_principal", "admin_secondaire", "enseignant"]
        },
        fonction: {
            type: String,
            enum: ["CEO", "Secrétaire", "enseignant", "CO_Fondateur"]
        },
        matieres: [String],
    },
    {
        timestamps: true,
    }

);

module.exports = model("Administration", adminCollection);