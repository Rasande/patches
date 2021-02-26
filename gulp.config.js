// Browser-sync options
const projectURL = 'localhost'
const browserAutoOpen = false

// Source paths
const styleSrc = './src/styles/style.scss'
const editorStyleSrc = './src/styles/editor-style.scss'
const scriptSrc = './src/scripts/script.js'

// Destination paths
const styleDest = './assets/css'
const scriptDest = './assets/js'

// Watch paths
const styleWatch = 'src/styles/**/*.scss'
const scriptWatch = 'src/scripts/**/*.js'
const phpWatch = '**/*.php'
const htmlWatch = '**/*.html'

module.exports = {
    projectURL,
    browserAutoOpen,
    styleSrc,
    editorStyleSrc,
    scriptSrc,
    styleDest,
    scriptDest,
    styleWatch,
    scriptWatch,
    phpWatch,
    htmlWatch,
}
