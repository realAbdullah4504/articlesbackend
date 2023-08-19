const mongoose = require("mongoose");

const articlesSchema = new mongoose.Schema(
  {
    authors: { type: Array, required: true },

    category: { type: Array, required: true },

    content: { type: String, required: true },

    content: { type: String, required: true },

    image: { type: String, required: true },

    images: { type: Array, required: true },

    paywall: { type: Boolean, required: true },

    sub_category: { type: Array, required: true },

    summary: { type: String, required: true },

    title: { type: String, required: true },

    url: { type: String, required: true },
    
    vote: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", articlesSchema);
module.exports = Article;
