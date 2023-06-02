const express = require('express');
const router = express.Router();
const Commande = require('../../models/commande');

// Créer une commande
router.post('/', async (req, res) => {
    try {
      const commandes = req.body; // Obtenir la liste des commandes du corps de la requête
      
      if (!Array.isArray(commandes)) {
        return res.status(400).json({ error: 'Le corps de la requête doit contenir un tableau de commandes' });
      }
      
      const nouvellesCommandes = commandes.map(({ id, statut }) => ({ id, statut }));
      const commandesCreees = await Commande.insertMany(nouvellesCommandes);
      
      res.json(commandesCreees);
    } catch (error) {
      console.error('Erreur lors de la création des commandes:', error);
      res.status(500).json({ error: 'Erreur lors de la création des commandes' });
    }
  });
  

// Récupérer toutes les commandes
router.get('/', async (req, res) => {
  try {
    const commandes = await Commande.find();
    res.json(commandes);
  } catch (error) {
    console.error('Erreur lors de la récupération des commandes:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des commandes' });
  }
});

// Récupérer une commande par ID
router.get('/:id', async (req, res) => {
  try {
    const commande = await Commande.findById(req.params.id);
    if (!commande) {
      return res.status(404).json({ error: 'Commande non trouvée' });
    }
    res.json(commande);
  } catch (error) {
    console.error('Erreur lors de la récupération de la commande:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération de la commande' });
  }
});

// Mettre à jour une commande
router.put('/:id', async (req, res) => {
    try {
      const commande = await Commande.findByIdAndUpdate(req.params.id, { statut: true }, { new: true });
      
      if (!commande) {
        return res.status(404).json({ error: 'Commande non trouvée' });
      }
      
      res.json(commande);
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la commande:', error);
      res.status(500).json({ error: 'Erreur lors de la mise à jour de la commande' });
    }
  });
  
  
// Supprimer une commande
router.delete('/:id', async (req, res) => {
  try {
    const commandeSupprimee = await Commande.findByIdAndRemove(req.params.id);
    if (!commandeSupprimee) {
      return res.status(404).json({ error: 'Commande non trouvée' });
    }
    res.json({ message: 'Commande supprimée avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de la commande:', error);
    res.status(500).json({ error: 'Erreur lors de la suppression de la commande' });
  }
});

module.exports = router;
