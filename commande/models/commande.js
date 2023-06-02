const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommandeSchema = new Schema({
    id :{
        type:Number,
        required:true
    },
    datePaiement:{
        type: Date,
        default: Date.now
    },
    statut:{
        type: Boolean,
        default: false
    }
});

  

module.exports = Commande = mongoose.model('commande' , CommandeSchema);



