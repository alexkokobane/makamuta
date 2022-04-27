const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
	res.redirect('/windfall')
})

router.get('/windfall', (req, res) => {
	res.render('pages/windfall', {title: "Windfall - Voucher Discounts | Makamuta"})
})

router.get('/windfall/privacy-policy', (req, res) => {
	res.render('pages/windfall-privacy', {title: "Privacy policy - Windfall | Makamuta"})
})

module.exports = router