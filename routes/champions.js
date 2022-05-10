const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('champions', { text: 'League of Legends Simulator' });
})
router.get('/shaco', (req, res) => {
    res.render('shaco', { text: 'League of Legends Simulator' });
})
router.get('/udyr', (req, res) => {
    res.render('udyr', { text: 'League of Legends Simulator' });
})
router.get('/volibear', (req, res) => {
    res.render('volibear', { text: 'League of Legends Simulator' });
})
router.get('/kayn', (req, res) => {
    res.render('kayn', { text: 'League of Legends Simulator' });
})
router.get('/khazix', (req, res) => {
    res.render('khazix', { text: 'League of Legends Simulator' });
})
router.get('/kalista', (req, res) => {
    res.render('kalista', { text: 'League of Legends Simulator' });
})

router.get('/:champion', (req, res) => {
    res.send(`Champion: ${req.params.champion}`);
})

router.param('champion', (req, res, next, champion) => {
    req.champion = champion;
    console.log(req.champion);
    next();
})
module.exports = router;
