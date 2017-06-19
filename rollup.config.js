import vue from 'rollup-plugin-vue2'
import alias from 'rollup-plugin-alias'
import replace from 'rollup-plugin-replace'
import string from 'rollup-plugin-string'
import json from 'rollup-plugin-json'
import less from 'rollup-plugin-less'
import css from 'rollup-plugin-css-only'
import buble from 'rollup-plugin-buble'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

const config = {
    sourceMap: false,
    useStrict: false,
    plugins: [
        vue(),
        alias({ vue: 'node_modules/vue/dist/vue.js' }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.VUE_ENV': JSON.stringify('browser')
        }),
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
    config.plugins.push(uglify({ 
        mangle: { reserved: ['vue', 'vue$1'] }
    }))
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

export default [
    Object.assign({}, config, {
        entry: 'src/bundle.js',
        format: 'iife',
        dest: 'dist/assets/js/bundle.min.js',
    }),
    Object.assign({}, config, {
        entry: 'src/app.js',
        format: 'iife',
        dest: 'dist/assets/js/app.js',
    })
]