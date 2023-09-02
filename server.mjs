import express from 'express'
import renderViews from './render-views.mjs'

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views/pages')
app.use(express.static('public'))

app.use(renderViews)

app.listen(3333, ()=> {
    console.log('Acessa a url: localhost:3333/')
})