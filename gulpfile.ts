import fse from 'fs-extra'
import path from 'path'

const BUILD = path.join(__dirname, 'themes')
const THEME_JSON = path.join(BUILD, 'Material Deep Ocean-color-theme.json')

export async function build() {
    await fse.emptyDir(BUILD)
    const themeConfig = require('./src/index').default
    await fse.writeFile(THEME_JSON, JSON.stringify(themeConfig))
}
