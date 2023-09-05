import express from "express"

const renderViews = express.Router()

renderViews.get('/', async (request, response)=>{
    response.render('home')    
})

renderViews.get('/certificado', async (request, response)=>{
    response.render('certificado')    
})

export default renderViews