const router = require("express").Router();
const { Post, User } = require('../../models');

router.get('/', async (req, res) => {
        
    try {
      const postData = await Post.findAll({
        include: [User],
      });
  
      const blogs = postData.map((post) => {
        const data = post.get({ plain: true })
        
        return {
          ...data,
        };
      });
  
      res.render("home", {blogs})
    } catch (err) {
      res.status(500).json(err);
    }
})

module.exports = router