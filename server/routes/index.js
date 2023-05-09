const router = require('express').Router();
const { Author, Post, Comment } = require('../models')


router.get('/api/authors', (req, res) => {
    Author.find({}, (err, result) => {
        if (result) {
            res.status(200).json(result)
        } else {
            console.log('Uh Oh, something went wrong');
            res.status(500).json({ message: 'something went wrong' });
          }
    })
  })

router.get('/api/posts', (req, res) => {
    Post.find({}, (err, result) => {
        if (result) {
            res.status(200).json(result)
        } else {
            console.log('Uh Oh, something went wrong');
            res.status(500).json({ message: 'something went wrong' });
          }
    })
  })

  router.get('/api/comments', (req, res) => {
    Comment.find({}, (err, result) => {
        if (result) {
            res.status(200).json(result)
        } else {
            console.log('Uh Oh, something went wrong');
            res.status(500).json({ message: 'something went wrong' });
          }
    })
  })

module.exports = router;