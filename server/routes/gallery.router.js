const express = require('express');
const { Pool } = require('pg');
const router = express.Router();

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  const dbQuery = `SELECT * FROM "gallery";`;
  Pool
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
