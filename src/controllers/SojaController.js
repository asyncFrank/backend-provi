const Soja = require('../models/SojaModel')

module.exports.addPeriod = async (req,res)=>{

    const {uf,state, region, period} = req.body;

    //  const newCategory = await Category.create({ name, description,category_id });
     const newSoja = await Soja.create({uf,state,region,period});
    
     return res.status(201).json(newSoja);

}


module.exports.getPeriod = async (req,res)=>{

    const allPeriods = Soja.find();

    return res.status(201).json(allPeriods);
}

module.exports.fetchPeriodByUf = async (req,res)=>{
    try {
        const {uf} = req.query
    
        
        const period = await Soja.findOne({
        uf: { $in: [uf] },
        });
                
        if (period) {
          return res.json(period);
          
        } else {
          return res.json({ msg: "Nenhum encontrada." });
        }
      } catch (error) {
        return res.json(error.message);
      }
}