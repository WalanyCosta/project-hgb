import express from "express"
import fs from 'fs-extra'
import puppeteer from 'puppeteer'
import { BANCODADOMEMORIA } from './utils/bd.mjs'
import { CriaPastaSeNaoExistir } from "./utils/criar-pasta-se-nao-existir.mjs"
import { compilaHbs } from "./utils/compila-hbs.mjs"

const renderViews = express.Router()

const getNomeDocs = () =>{
    return (Math.random() * 13) + '_doc.pdf'
}

renderViews.get('/', async (request, response)=>{
    response.render('home')
})

renderViews.get('/certificado/:numeroAgente', async (request, response)=>{
    const { numeroAgente } = request.params
    const usuario = BANCODADOMEMORIA.find((u)=> u.numeroAgente === numeroAgente)

    if(!usuario){
        return response.status(403).json({ mensagemError: 'usuário não existe na Base de Dados'})
    }

    const nomeDoArquivo = getNomeDocs()
    const certificadoEmHtml = await compilaHbs(usuario)

    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    await page.setContent(certificadoEmHtml)
    await page.emulateMediaType('screen')
    await CriaPastaSeNaoExistir()
    //retorna o pdf criado
    const pdf = await page.pdf({
        path: `docs/${nomeDoArquivo}`,
        format: 'letter',
        landscape: true,
        printBackground: true
    })
    
    await browser.close()
    //codigo de envio deve estar aqui

    return response.json({mensagem: 'Gerado com sucesso'})    
})

export default renderViews