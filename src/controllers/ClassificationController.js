const Classification = require("../models/ClassificationModel");

module.exports.addStartupClassification = async (req, res) => {
  const { classification_id, name, description, obs } = req.body;

  const classificationAlreadExists = await Classification.findOne({
    name: { $eq: name },
  });

  if (classificationAlreadExists) {
    return res.status(400).json({ message: "Classificação já existente." });
  }

  const newClassification = await Classification.create({
    classification_id,
    name,
    description,
    obs,
  });

  return res.status(201).json(newClassification);
};

//like getGenres -> Netflix // TESTAR, FOCAR, TESTAR, OBSERVAR....
module.exports.getClassifications = async (req, res) => {
  try {
    const classifications = await Classification.find();

    if (classifications) {

       //mapear apenas os atributos necessários em um novo array
        const classificationNormalized= classifications.map( (classification) => {
        return {"id" : classification.classification_id, "name" : classification.name}
     })
     //responder a requisição com esse novo array
     return res.json({classifications: classificationNormalized}); 
        
    //   return res.json({ classifications: classifications });
    } else {
      return res.json({ msg: "Nenhuma encontrada." });
    }
  } catch (error) {
    return res.json(error.message);
  }
};
