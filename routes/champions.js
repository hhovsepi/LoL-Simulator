const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Champion Database");
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


// demonstration of chaining routes with router.route

// router.route('/:champion').get((req, res) => {
//     res.send(`Champion: ${req.params.champion}`);
// }).post((req, res) => {
//     res.send(`Champion: ${req.params.champion}`);
// }).put((req, res) => {
//     res.send(`Champion: ${req.params.champion}`);
// }).delete((req, res) => {
//     res.send(`Champion: ${req.params.champion}`);
// })