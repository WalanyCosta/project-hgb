import express from 'express'
import renderViews from './src/routes/render-views.mjs'

const app = express()
app.set('view engine', 'ejs')
app.set('views', 'src/views/pages')

app.use(renderViews)

app.listen(3333, ()=> {
    console.log('Acessa a url: localhost:3333/')
})