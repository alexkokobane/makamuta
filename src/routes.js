const express = require('express')

const router = express.Router()

const toMain = (req, res, next) => {
	if(req.headers.host.search(/^www/) !== -1){
		res.set('Location', 'https://makamuta.com'+req.originalUrl)
		res.status(301).send()
	}
	next()
}

router.get('/', toMain, (req, res) => {
	res.redirect('/windfall')
})

router.get('/windfall',  toMain, (req, res) => {
	res.render('pages/home', {
		title: "Windfall - Voucher Discounts | Makamuta",
		description: "An app for creating goal driven extensive giveaways on your Shopify store."
	})
})

router.get('/windfall/privacy-policy', toMain, (req, res) => {
	res.render('pages/windfall-privacy', {
		title: "Privacy policy - Windfall | Makamuta",
		description: "The privacy policy of the Windfall."
	})
})

module.exports = router