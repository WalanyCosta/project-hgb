import express from "express"

const renderViews = express.Router()

renderViews.get('/', async (request, response)=>{
    response.render('home')    
})

renderViews.get('/formulario', async (request, response)=>{
    response.render('modal-formulario') 
})

export default renderViews