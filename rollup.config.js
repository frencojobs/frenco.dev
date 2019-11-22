import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'

const production = !process.env.DEVELOPMENT

export default [
  {
    input: 'src/main.js',
    output: {
      sourcemap: false,
      format: 'iife',
      name: 'app',
      file: 'public/bundle.js'
    },
    plugins: [
      svelte({
        dev: !production,

        css: css => {
          css.write('public/bundle.css', false)
        }
      }),

      resolve({
        browser: true,
        dedupe: importee =>
          importee === 'svelte' || importee.startsWith('svelte/')
      }),
      commonjs(),
      !production && livereload('public'),
      production && terser()
    ],
    watch: {
      clearScreen: false
    }
  },
  {
    input: 'src/App.svelte',
    output: {
      format: 'cjs',
      file: 'ssr/bundle.js'
    },
    plugins: [
      svelte({
        generate: 'ssr'
      })
    ]
  }
]
