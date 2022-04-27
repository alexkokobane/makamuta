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

app.use('/', router)

const port = process.env.PORT || 4040

app.listen(port, () => {
	console.log('your app is now listening on port '+port);
})