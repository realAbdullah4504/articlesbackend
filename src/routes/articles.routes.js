const router = require("express").Router();
const articles = require("../controllers/articles.controllers");

router.get("/",articles.getArticles);
router.post('/',articles.postArticles);
router.patch('/:id',articles.editArticles);
router.delete('/:id',articles.deleteArticles);

module.exports = router;
