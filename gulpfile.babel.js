import {
    src,
    dest,
    watch,
    series,
    parallel
} from 'gulp'
import yargs from 'yargs'
import sass from 'gulp-dart-sass'
import cleanCss from 'gulp-clean-css'
import gulpif from 'gulp-if'
import postcss from 'gulp-postcss'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'autoprefixer'
import webpack from 'webpack-stream'
import named from 'vinyl-named'
import browserSync from 'browser-sync'

const config = require('./gulp.config.js')
const PRODUCTION = yargs.argv.prod;
const server = browserSync.create()

// Browsersync
export const bs = done => {
    server.init({
        proxy: config.projectURL,
        open: config.browserAutoOpen,
        notify: false,
        ui: false
    })
    done()
};

// Reload browser
export const reload = done => {
    server.reload()
    done()
};

// Run gulp styles to compile sass files
// Run gulp styles --prod to also minify 
export const styles = () => {
    return src([config.styleSrc, config.editorStyleSrc])
        .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer(config.BROWSERS_LIST)]))
        .pipe(gulpif(PRODUCTION, cleanCss({
            compatibility: 'ie8'
        })))
        .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
        .pipe(dest(config.styleDest))
        .pipe(server.stream())
}

// Run gulp scripts to compile js files
// Run gulp scripts --prod to also minify 
export const scripts = () => {
    return src([config.scriptSrc])
        .pipe(named())
        .pipe(webpack({
            module: {
                rules: [{
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }]
            },
            mode: PRODUCTION ? 'production' : 'development',
            devtool: !PRODUCTION ? 'inline-source-map' : false,
            output: {
                filename: '[name].js'
            },
            externals: {
                jquery: 'jQuery'
            },
        }))
        .on('error', function handleError() {
            this.emit('end'); // Recover from errors
        })
        .pipe(dest(config.scriptDest))
}

// Watch
export const watcher = () => {
    watch(config.styleWatch, styles)
    watch(config.scriptWatch, series(scripts, reload))
    watch(config.phpWatch, reload)
    watch(config.htmlWatch, reload)
    console.log(config.styleWatch)
}

// Start dev environment
// npm start
export const dev = series(parallel(styles, scripts), bs, watcher)
// npm run build
export const build = series(parallel(styles, scripts))
export default dev;
