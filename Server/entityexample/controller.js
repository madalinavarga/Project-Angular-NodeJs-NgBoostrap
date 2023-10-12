const tableexample = require("./models");

const getAll = async (req, res) => {
  try {
    const result = await tableexample.find({});
    res.status(200).json(result);
  } catch (error) {
    console.log("error: ", error);
    res.json({ message: "There was an error getting all sections" });
  }
};

module.exports ={
    getAll
}