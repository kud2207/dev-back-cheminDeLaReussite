const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const adminCollection = new Schema(
    {
        nom: String,
        prenom: String,
        age: Number,
        email: {
            type: String,
            unique: true,
            match: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
        },
        password: {
            type: String,
            minlength: 8,

        },
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