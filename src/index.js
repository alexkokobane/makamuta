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
		"default-src 'self' makamuta.com *.makamuta.com *.ngrok.io; style-src 'self' 'unsafe-inline' https://cdn.fontshare.com https://api.fontshare.com https://fonts.googleapis.com; script-src 'self' https://cdn.jsdelivr.net; font-src 'self' https://cdn.fontshare.com https://api.fontshare.com https://fonts.googleapis.com https://fonts.gstatic.com"
		)
	next()
})

app.use('/', router)

const port = process.env.PORT || 4040

app.listen(port, () => {
	console.log('your app is now listening on port '+port);
})