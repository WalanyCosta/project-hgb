import path from 'path'
import hbs from 'handlebars'
import fs from 'fs-extra'

export const compilaHbs = async function(data){
    const caminhoDoArquivo = path.join('views/pages/template.hbs')
    const html = await fs.readFile(caminhoDoArquivo, 'utf-8')
    return hbs.compile(html)(data);
}