const Category = require("../models/CategoryModel");

//Crud Category
module.exports.addStartupCategory = async (req, res) => {
  try {
    const { name, description,category_id } = req.body;

    categoryAlreadExist = await Category.findOne({
      name: { $eq: name },
    });
    if (categoryAlreadExist) {
      return res.status(400).json({ message: "Categoria já existente." });
    }

    const newCategory = await Category.create({ name, description,category_id });

    return res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).send({ message: "Falha ao cadastrar Categoria." });
  }
};

//CONSULTAS
module.exports.getStartupByCategory = async (req, res) => {
  try {
    const { category_id } = req.query;

    // const category = await Category.find({
    //     state: { $eq: state }
    // })

    const category = await Category.find({
      category_id: { $eq: category_id },
    });

    if (category) {
      return res.json(category);
    } else {
      return res.json({ msg: "Nenhuma encontrada." });
    }
  } catch (error) {
    return res.json(error.message);
  }
};

//TODAS AS CATEGORIAS 
module.exports.getCategories = async (req, res) => {
  try {
    // const category = await Category.find({
    //     state: { $eq: state }
    // })

    const category = await Category.find();

    if (category) {
      return res.json(category);
    } else {
      return res.json({ msg: "Nenhuma encontrada." });
    }
  } catch (error) {
    return res.json(error.message);
  }
};

//***** FIM DE CONSULTAS

//crUd Category
//   module.exports.updateStartupCategory = asycn(req,res)=>{
//     //TODO: check
//     return;
//   }

//   //cruD Category
//   module.exports.deleteStartypCategory = asycn(req,res)=>{
//     //TODO: check
//   }
