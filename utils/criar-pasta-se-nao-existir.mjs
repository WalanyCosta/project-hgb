import fs from 'fs-extra'
import path from 'path'

export const CriaPastaSeNaoExistir = async (directorio = 'docs') => {
    await fs.ensureDir(path.join(directorio))
}