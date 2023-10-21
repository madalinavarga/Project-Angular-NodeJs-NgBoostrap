const recipesTable = require("./models");

const getAll = async (req, res) => {
  console.log(req.query);
  try {
    //partial
    let query = req.query;
    
    if (query) {
      const result = await recipesTable.find({ title: { $regex: query.title, $options: "i" } });
      console.log(result)
      return res.status(200).json(result);
    }

    const result = await recipesTable.find(query);
    return res.status(200).json(result);
  } catch (error) {
    console.log("error", error);
    res.json({ message: "There was an error getting all recipes" });
  }
};

const create = async (req, res) => {
  try {
    const newRecipe = await recipesTable.create(req.body);
    if (newRecipe) {
      return res.status(201).json(newRecipe);
    }
    res.status(500);
  } catch (error) {
    console.log("error", error);
    res.json({ message: "There was an error" });
  }
};

module.exports = {
  getAll,
  create,
};
