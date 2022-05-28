# rollup-ts-boilerplate

An environment to kickstart ts library creation

## How to use
`npm run dev` to serve demo page.  
Scripts for this page will be bundled from `/demo/demo.ts`, where the library is imported.  
Live reloading enabled.

`npm run build` to build your library.  
By default, output files will go to `/dist/` folder in project root.  
By default, source code will be bundled to 3 formats: iife, cjs and esm.  
Type definitions will be emitted and bundled alongside the main bundle.  
`package.json` will be automaticlly updated with the filenames of build output.

## How to get started
- clone this repo
- whipe everything from the `/src/` directory
- customize your library with constants in `/rollup.config.js` in project root
- write some source code in `/src/`
- remove sample code from `/demo/demo.ts` and import your library
- `npm run dev`
