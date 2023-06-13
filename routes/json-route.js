const express = require("express");
const router = express.Router();
const fs = require('fs/promises');

router.get('/', (req, res) => {
    console.log('query:', req.query);
    const obj = { key: 'value' };
    res.json(obj);
});

router.get('/parse', async (req, res) => {
    console.log('parsing....');
    // console.log('dir', await fs.readdir('./'))
    const data = await fs.readFile('./db/source.json', 'utf8');
    console.log(data);
    res.json(JSON.parse(data));
});

// router.post('/:dir/:subdir/:id', (req, res) => {
//     console.log('body --->', req.params);
//     res.end();
// });

module.exports = router;