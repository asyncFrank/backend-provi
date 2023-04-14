const Startup = require("../models/StartupsModel");

//startup by id
module.exports.fetchStartupById = async (req, res) => {
  try {
    // const {_id } = req.query;

    //VERIFICAR BEM
    const startup = await Startup.findById(req.params.id);
    if (startup) {
      return res.json(startup);
      // console.log(total);
    } else {
      return res.json({ msg: "Nenhuma encontrada." });
    }
  } catch (error) {
    return res.json(error.message);
  }
};

module.exports.countCollection = async (req, res) => {
  const totalDocs = await Startup.find().countDocuments();
  console.log(totalDocs);
  return res.json("OK");
};

module.exports.fetchStartupByClassification = async (req, res) => {
  try {
    const { classification_id } = req.query;

    //VERIFICAR BEM
    const startups = await Startup.find({
      classification_id: { $in: [classification_id] },
    });
    const total = startups.length;

    if (startups) {
      return res.json({ results: startups, total: total });
      // console.log(total);
    } else {
      return res.json({ msg: "Nenhuma encontrada." });
    }
  } catch (error) {
    return res.json(error.message);
  }
};

//POR SEGMENTO
module.exports.fetchStartupBySegment = async (req, res) => {
  try {
    const { segment } = req.query;

    //VERIFICAR BEM
    const startups = await Startup.find({
      segment: { $in: [segment] },
    });

    if (startups) {
      return res.json(startups);
    } else {
      return res.json({ msg: "Nenhuma encontrada." });
    }
  } catch (error) {
    return res.json(error.message);
  }
};

module.exports.fetchAllStartups = async (req, res) => {
  try {
    // const { classification_id } = req.query;

    const allStartups = await Startup.find();

    if (allStartups) {
      return res.json(allStartups);
    } else {
      return res.json({ msg: "Nenhuma encontrada." });
    }
  } catch (error) {
    return res.json(error.message);
  }
};

module.exports.fetchStartupByCategory = async (req, res) => {
  const { type } = req.query;

  let strSegment, startupByCategory;

  console.log(type);

  switch (type) {
    case "antes":
      strSegment = "Antes da Fazenda";
      break;
    case "dentro":
      strSegment = "Dentro da Fazenda";
      break;
    case "depois":
      strSegment = "Depois da Fazenda";
      break;
    case "all":
      strSegment = "all";
      break;
  }
  console.log(strSegment);
  try {
    if (strSegment.indexOf("all") === -1) {
      startupByCategory = await Startup.find({
        segment: {
          $eq: strSegment,
        },
      });
    } else {
      startupByCategory = await Startup.find();
    }

    if (startupByCategory) {
      return res.json(startupByCategory);
    } else {
      return res.json({ msg: "Nenhuma encontrada." });
    }
  } catch (error) {
    return res.json(error.message);
  }
};
