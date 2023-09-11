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

const gerarPdf = async (certificadoEmHtml, nomeDoArquivoGerado) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setContent(certificadoEmHtml)
    await page.emulateMediaType('screen')
    await CriaPastaSeNaoExistir()
    const pdf = await page.pdf({
        path: `docs/${nomeDoArquivoGerado}`,
        format: 'letter',
        landscape: true,
        printBackground: true
    })
    await browser.close()
    return pdf
}

renderViews.get('/', async (request, response)=>{
    response.render('home')
})

renderViews.get('/certificado/:numeroAgente', async (request, response)=>{
    const { numeroAgente } = request.params
    const usuario = BANCODADOMEMORIA.find((u)=> u.numeroAgente === numeroAgente)
    const nomeDoArquivoGerado = getNomeDocs()
    if(!usuario){
        return response.json({ error: 'usuário não existe na Base de Dados'})
    }

    try {
        const certificadoEmHtml = await compilaHbs(usuario)

        const pdf = await gerarPdf(certificadoEmHtml, nomeDoArquivoGerado)        
        
        //codigo de envio deve estar aqui

        return response.json({mensagem: 'Gerado com sucesso'})     
    } catch (error) {
        return response.json({error: 'Erro no servidor. Por favor tente novamente'})   
    }
})

export default renderViews