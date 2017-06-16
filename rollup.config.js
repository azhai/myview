import vue from 'rollup-plugin-vue2'
import string from 'rollup-plugin-string'
import json from 'rollup-plugin-json'
import less from 'rollup-plugin-less'
import css from 'rollup-plugin-css-only'
import buble from 'rollup-plugin-buble'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
//import uglify from 'rollup-plugin-uglify'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

const config = {
    entry: 'src/main.js',
    dest: 'dist/assets/js/bundle.min.js',
    format: 'iife',
    sourceMap: false,
    useStrict: false,
    plugins: [
        vue(),
        string({ include: '**/*.html' }),
        json(),
        css({ output: 'dist/assets/css/common.min.css' }),
        less({ output: 'dist/assets/css/style.css' }),
        buble({ exclude: 'node_modules/**' }),
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs()
    ]
}

if (process.env.NODE_ENV === 'production') {
    config.sourceMap = false
    //config.plugins.push(uglify())
}

if (process.env.NODE_ENV === 'development') {
    config.sourceMap = false
    config.plugins.push(livereload())
    config.plugins.push(serve({
        contentBase: './dist',
        port: 8080,
        open: true
    }))
}

export default config