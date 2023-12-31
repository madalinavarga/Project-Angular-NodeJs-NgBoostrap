const recipesTable = require("./models");

const getAll = async (req, res) => {
  try {
    let query = req.query;

    if (query) {
      const result = await recipesTable.find({
        title: { $regex: query.title, $options: "i" },
      });
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

const update = async (req, res) => {
  try {
    let recipe = {...req.body};
    delete recipe._id;
    const newRecipe = await recipesTable.findOneAndUpdate({ _id: req.body._id }, {$set:recipe});

    if (newRecipe) {
      return res.status(200).json(recipe);
    }
    res.status(404);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "There was an error" });
  }
};

module.exports = {
  getAll,
  create,
  update
};
