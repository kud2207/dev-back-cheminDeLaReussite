const mongoose = require('mongoose');
const { Schema, model } = mongoose

const eleveCollection = new Schema({
    nom: String,
    prenom: String,
    age: Number,
    sexe: String,
    etablissement: String,
    classe: String,
    annee_scolaire: String,
    matieres_choisies: [String],
    frais: {
        total: Number,
        paye: Number,
        reste: Number,
        reductions: [
            {
                type: String,
                montant: Number
            }
        ]
    },
    presence: [
        {
            date: String,
            etat: Boolean
        }
    ],
    remarques: [
        {
            commentaire: String,
            avertissement: Boolean,
            date: String
        }
    ],
    notes: [
        {
            matiere: String,
            devoirs: [
                {
                    titre: String,
                    note: Number,
                    date: String
                }
            ]
        }
    ],
},
    {
        timestamps: true,
    }
)

module.exports = model("Eleve", eleveCollection);