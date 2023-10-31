const favoritesTable = require("./models");

const getAll = async (req, res) => {
  try {
    const favorites = await favoritesTable.find().populate("recipeId");
    const recipes = favorites.map((fav) => fav.recipeId);
    res.status(200).json(recipes);
  } catch (error) {
    console.log("error", error);
    res.json({ message: "There was an error" });
  }
};

const getIsFavoriteById = async (req, res) => {
  try {
    console.log("req", req);
    const id = req?.params?.id;
    const recipe = await favoritesTable.findOne({ recipeId: id });
    if (recipe) {
      res.status(200).json(true);
    } else {
      res.status(404).json(false);
    }
  } catch (error) {
    console.log("error", error);
    res.json({ message: "There was an error" });
  }
};

const add = async (req, res) => {
  try {
    const query = req.query;
    const recipe = await favoritesTable.findOne({ recipeId: query.recipeId });
    if (recipe) {
      return res.status(400).json("Exista");
    }
    const newFav = await favoritesTable.create({ recipeId: query.recipeId });
    if (newFav) {
      return res.status(201).json();
    }

    res.status(500).json();
  } catch (error) {
    console.log("error", error);
    res.json({ message: "There was an error" });
  }
};

const remove = async (req, res) => {
  try {
    const { recipeId } = req.query;

    if (!recipeId) {
      return res.status(400).json({ message: "recipeId is required" });
    }

    const favorite = await favoritesTable.findOne({ recipeId: recipeId });
    if (!favorite) {
      return res.status(404).json({ message: "Favorite not found" });
    }

    await favoritesTable.findOneAndDelete(favorite);

    return res.status(200).json({ message: "Favorite removed successfully" });
  } catch (error) {
    console.error("Error removing favorite:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAll,
  add,
  remove,
  getIsFavoriteById,
};
