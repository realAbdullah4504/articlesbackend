const path = require("path");
const Article = require("../models/articles.models");

const getArticles = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 34;
  const skip = (page - 1) * limit;

  console.log("query", req.query);

  const filters = {};

  if (req.query.categories) {
    // const categories = req.query.categories.split(",");
    // filters.category = { $in: categories };
    filters.category = { $in: req.query.categories };
  }

  if (req.query.subcategories) {
    // const subcategories = req.query.subcategories.split(",");
    // filters.sub_category = { $in: subcategories };
    filters.sub_category = { $in: req.query.subcategories };
  }

  if (req.query.authors) {
    // const authors_find = req.query.authors.split(",");
    // filters.authors = { $in: authors_find };
    filters.authors = { $in: req.query.authors };
  }
  console.log(filters);
  try {
    const articles = await Article.find(filters)
      .skip(skip)
      .limit(limit)
      .sort({ date_created: -1 }); // Assuming you want to sort by date_created in descending order
    console.log("articles", articles.length);
    res.json({ articles });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postArticles = async (req, res) => {
  // res.json(req.body);

  // console.log(req.body);

  try {
    const articles = new Article(req.body);
    await articles.save();
    // const articles = await Article.insertMany(req.body);

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
