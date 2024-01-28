const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
  const pic = req.params.id
  let picLikes = req.params.likes;
  picLikes += 1;
  const queryText = `UPDATE "gallery" SET "likes" = $1 WHERE "id" = $2`
  pool
  .query(queryText, picLikes, pic)
  .then((result) => {
    console.log('Like Updated');
    res.sendStatus(200);
  })
  .catch((error) => {
    console.error(error);
    res.sendStatus(500);
  })
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  const dbQuery = `SELECT * FROM "gallery";`;
  pool
    .query(dbQuery)
    .then((result) => {
      console.log('Server query successful')
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Server Query Failed: ', error);
      res.sendStatus(500);
    });
});

module.exports = router;
