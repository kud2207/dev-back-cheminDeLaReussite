const adminCollection = require('../models/adminModel');

// Creation des admins
const creadAdmin = async (req, res) => {
    try {
        const { email, prenom, nom, age, password, matieres } = req.body;

        if (!email || !prenom || !nom || !age || !password || !matieres) {
            return res.status(400).json({ message: "Tous les champs doivent être remplis" });
        }

        const adminExist = await adminCollection.findOne({ email });
        if (adminExist) {
            return res.status(400).json({ message: "L'admin existe déjà" });
        }

        const adminData = new adminCollection({
            email,
            prenom,
            nom,
            age,
            password,
            matieres
        });

        const saveAdmin = await adminData.save();
        res.status(200).json({ saveAdmin });

    } catch (error) {
        res.status(500).json({
            message: "Le serveur rencontre un problème",
            error: error.message,
        });
        console.log(error.message);
    }
};

module.exports = {
    creadAdmin
};
