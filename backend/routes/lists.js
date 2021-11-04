const router = require('express').Router();
const List = require('../models/List');
const verify = require('../verifyToken');

//POST
router.post('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);
    try {
      const lists = await newList.save();
      res.status(201).json(lists);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json('Not allowed!');
  }
});

//DELETE
router.delete('/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(201).json('List has been deleted!');
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json('Not allowed!');
  }
});

//GET
router.get('/', verify, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];

  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ]);
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
