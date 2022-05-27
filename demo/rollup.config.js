import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import typescript from 'rollup-plugin-typescript2'
import path from 'path'
import { terser } from 'rollup-plugin-terser'

export default {
  input: path.resolve(__dirname, 'demo.ts'),
  output: {
    file: path.resolve(__dirname, 'bundle.js'),
    format: 'iife',
    compact: true
  },
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: { declaration: false }
      }
    }),
    terser(),
    serve(__dirname),
    livereload(path.resolve(__dirname, '..'))
  ]
}
