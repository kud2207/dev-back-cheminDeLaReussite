const eleveCollection = require('../models/eleveModel');

// Creation d'un eleve
const creerEleve = async (req, res) => {
    try {
        const { nom, prenom, age, sexe, etablissement, classe, annee_scolaire } = req.body;

        if (!nom || !prenom || !age || !sexe || !etablissement || !classe || !annee_scolaire) {
            return res.status(400).json({ message: "Tous les champs doivent être remplis" });
        }

        const eleveData = new eleveCollection({
            nom,
            prenom,
            age,
            sexe,
            etablissement,
            classe,
            annee_scolaire
        });

        const saveEleve = await eleveData.save();
        res.status(200).json({ saveEleve });

    } catch (error) {
        res.status(500).json({
            message: "Le serveur rencontre un problème",
            error: error.message,
        });
        console.log(error.message);
    }
};

module.exports = {
    creerEleve
};
