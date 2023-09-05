import express from "express"

const renderViews = express.Router()

renderViews.get('/', async (request, response)=>{
    response.render('home')    
})

export default renderViews