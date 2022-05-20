const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const morgan = require('morgan')

const router = require('./routes')

const app = express()

app.use(morgan('tiny'))
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(expressLayouts)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.set('layout', 'layouts/main')

app.use((req, res, next) =>{
	res.setHeader(
		"Content-Security-Policy", 
		"default-src 'self' makamuta.com *.makamuta.com *.ngrok.io; connect-src 'self' https://www.google-analytics.com wss://client.relay.crisp.chat https://storage.crisp.chat https://client.crisp.chat; style-src 'self' 'unsafe-inline' https://cdn.fontshare.com https://api.fontshare.com https://fonts.googleapis.com https://client.crisp.chat; script-src 'self' https://cdn.jsdelivr.net https://www.googletagmanager.com https://www.google-analytics.com https://client.crisp.chat; font-src 'self' https://cdn.fontshare.com https://api.fontshare.com https://fonts.googleapis.com https://fonts.gstatic.com https://client.crisp.chat; img-src 'self' data: https://client.crisp.chat https://image.crisp.chat https://storage.crisp.chat; media-src https://client.crisp.chat; frame-src 'self' https://game.crisp.chat;"
		)
	next()
})

app.use('/', router)

const port = process.env.PORT || 4040

app.listen(port, () => {
	console.log('your app is now listening on port '+port);
})