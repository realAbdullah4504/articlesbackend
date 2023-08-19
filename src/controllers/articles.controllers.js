const path = require("path");
const Article = require("../models/articles.models");

const getArticles = async (req, res) => {
  // res.json("api is running");
    console.log(req.params);
   const page = req.query.page || 1;
   const limit = req.query.limit || 15;
   const skip = (page - 1) * limit;

  try {
    const articles = await Article.find({}).skip(skip).limit(limit);
    //console.log(data)
    res.json({ articles: articles.reverse() });
  } catch(error) {
    res.status(400).json("error",error);
  }
};
const postArticles = async (req, res) => {
  // res.json(req.body);

  // console.log(req.body);

  try {
    // const articles = new Article(req.body);
    // await articles.save();
    const articles = await Article.insertMany(req.body);

    res.json({
      articles,
      status: true,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
const editArticles = async (req, res) => {
  res.json("api is running");
  // const id = req.params.id;
  // //res.json(req.params.id);
  // const updatedDeal = await Deal.findByIdAndUpdate(id, req.body, { new: true });
  // res.json({ Deal: updatedDeal });
};

const deleteArticles = async (req, res) => {
  res.json("api is running");

  // const id = req.params.id;

  // try {
  //   const deleteDeal = await Deal.deleteOne({ _id: id });

  //   //console.log(updatedService);
  //   return res.json({ service: deleteDeal });
  // } catch (error) {
  //   console.error(error);
  //   return res.status(500).json({ message: "Internal server error" });
  // }
};

module.exports = {
  getArticles,
  postArticles,
  editArticles,
  deleteArticles,
};
