const express = require('express');
const Animal = require('../models/Animal');
const router = express.Router();

// Route pour mettre à jour les consultations
router.put('/animals/consult/:animalId', async (req, res) => {
  const { animalId } = req.params;

  try {
    const animal = await Animal.findById(animalId);
    if (!animal) {
      return res.status(404).json({ error: 'Animal not found' });
    }

    animal.consultations += 1; // Incrémenter le compteur
    await animal.save();

    res.json({ message: 'Consultation updated', consultations: animal.consultations });
  } catch (error) {
    res.status(500).json({ error: 'Error updating consultations' });
  }
});

module.exports = router;


// Route pour obtenir les consultations pour tous les animaux
router.get('/animals', async (req, res) => {
  try {
    const animals = await Animal.find().sort({ consultations: -1 }); // Trier par nombre de consultations
    res.json(animals);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching animals' });
  }
});
