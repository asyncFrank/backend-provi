const mongoose = require("mongoose");

const SojaSchema = new mongoose.Schema(
   {
    uf:{
        type:String,
        require:true
        
    },
    state:{
        type:String,
        require:true
    },
    region:{
        type:String,
    },
    period:{
        type:String,
        require:true
    }
   }
)

const Soja = mongoose.model("Soja",SojaSchema)

module.exports = Soja;