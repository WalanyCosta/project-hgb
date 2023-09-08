import express from "express"
import fs from 'fs-extra'
import path from 'path'
import hbs from 'handlebars'
import puppeteer from 'puppeteer'
import { BANCODADOMEMORIA } from './utils/bd.mjs'

const compile = async function(data){
    const caminhoDoArquivo = path.join('views/pages/template.hbs')
    const html = await fs.readFile(caminhoDoArquivo, 'utf-8')
    return hbs.compile(html)(data);
}


const renderViews = express.Router()

renderViews.get('/', async (request, response)=>{
    response.render('home')
})

renderViews.get('/certificado/:numeroAgente', async (request, response)=>{
    const { numeroAgente } = request.params
    const usuario = BANCODADOMEMORIA.find((u)=> u.numeroAgente === numeroAgente)

    if(!usuario){
        return response.json({ mensagem: 'usuário não existe na Base de Dados'})
    }

    const nomeDoArquivo = (Math.random() * 13) + '_doc.pdf'
    const certificadoEmHtml = await compile(usuario)

    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    await page.setContent(certificadoEmHtml)
    await page.emulateMediaType('screen')
    const pdf = await page.pdf({
        path: `docs/${nomeDoArquivo}`,
        format: 'letter',
        landscape: true,
        printBackground: true
    })
    
    await browser.close()

})

renderViews.get('/exibirCertificado/:caminhoDoArquivo', async(request, response) => {
    const caminhoDoArquivo = request.params.caminhoDoArquivo
    const pdf = await fs.readFile(caminhoDoArquivo, 'utf-8')

    return response.send(pdf)
})

export default renderViews