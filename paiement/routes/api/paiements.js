const express = require('express');
const axios = require('axios');
const router = express.Router();


// Route pour effectuer un paiement
router.post('/paiement', async (req, res) => {
  try {
    // Effectuer les opérations nécessaires pour le paiement
    
    const commandeId = req.body.commandeId; // Identifiant de la commande à marquer comme payée
    
    // Envoyer une requête au microservice "Commande" pour mettre à jour le statut de la commande
    await axios.put(`http://localhost:5001/api/commandes/${commandeId}`, { statut: true });
    
    res.json({ message: 'Paiement effectué avec succès' });
  } catch (error) {
    console.error('Erreur lors du paiement:', error);
    res.status(500).json({ error: 'Erreur lors du paiement' });
  }
});


// Obtenir tous les paiements
router.get('/', async (req, res) => {
    try {
      const paiements = await Paiement.find();
      res.json(paiements);
    } catch (error) {
      console.error('Erreur lors de la récupération des paiements :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des paiements' });
    }
  });

// Obtenir un paiement par son ID
router.get('/:id', async (req, res) => {
  try {
    const paiement = await Paiement.findById(req.params.id);
    if (!paiement) {
      return res.status(404).json({ error: 'Paiement non trouvé' });
    }
    res.json(paiement);
  } catch (error) {
    console.error('Erreur lors de la récupération du paiement :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération du paiement' });
  }
});


module.exports = router;
