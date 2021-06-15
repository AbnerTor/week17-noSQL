const router = require('express').Router();

const path = require('path');


// this takes us to the respective pages
router.get('/', (req, res) => res.sendFile(path.join(__dirname,'../public/index.html')));

router.get('/stats', (req, res) => res.sendFile(path.join(__dirname,'../public/stats.html')));

router.get('/exercise', (req, res) => res.sendFile(path.join(__dirname,'../public/exercise.html')));

//add or retrieve workouts

router.get('/api')




module.exports = router 