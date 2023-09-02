import express from "express"

const renderViews = express.Router()

renderViews.get('/', async (request, response)=>{
    response.render('home', {message: 'hello, marta-dev!'})    
})

export default renderViews