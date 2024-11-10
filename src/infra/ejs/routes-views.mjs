import express from "express"

const routeViews = express.Router()

renderViews.get('/', async (request, response)=>{
    response.render('home')
})

export default routeViews