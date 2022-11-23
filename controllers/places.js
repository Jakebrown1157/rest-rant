const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'la esquina',
        city: 'las Vegas',
        state: 'Nevada',
        Cuisines: 'Mexican',
        pic: 'http://placekitten.com/250/250'
    }]
    res.render('places/index', { places })
})


module.exports = router
