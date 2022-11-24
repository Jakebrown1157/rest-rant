const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'la esquina',
        city: 'las Vegas',
        state: 'Nevada',
        Cuisines: 'Mexican',
        pic: '/images/resturant.png'
    },{
        name: 'Coding cat cafe',
        city: 'Phoenix',
        state: 'AZ',
        Cuisines: 'coffie, bakery',
        pic: '/images/resturant2.png'
    }]
    res.render('places/index', { places })
})


module.exports = router
