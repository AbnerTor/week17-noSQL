const router = require('express').Router();
const Workout = require('../models/workouts')
const path = require('path');


// this takes us to the respective pages
router.get('/', (req, res) => res.sendFile(path.join(__dirname,'../public/index.html')));

router.get('/stats', (req, res) => res.sendFile(path.join(__dirname,'../public/stats.html')));

router.get('/exercise', (req, res) => res.sendFile(path.join(__dirname,'../public/exercise.html')));

//add or retrieve workouts


router.get('/api/workouts', (req, res) => {
    Workout.aggregate([{
        $addFields: { totalDuration: {$sum: 'exercises.duration'}}
    }])
    .then(allworkouts => {
        res.json(allworkouts);
    })
    .catch((err) => {
        res.status(400).json(err)
    })
})


router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration:{$sum: '$exercises.duration'}
        }
    }])
    .then(workoutData => {
        res.json(workoutData);
    })
    .catch((err) => {
        res.status(400).json(err)
    })
})


router.put('/api/workouts/:id', ({body, params}, res) => {     
    Workout.findByIdAndUpdate(
        {_id: params.id},
        { $push: {exercises: body}},
        { new: true})
    .then(allworkouts => {
        res.json(allworkouts)
    })
})

router.post('/api/workouts/', ({ body }, res) => {
    Workout.create(body)
    .then(workoutData => {
        res.json(workoutData)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
})




module.exports = router 