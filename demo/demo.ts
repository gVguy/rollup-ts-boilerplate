import { getCar } from '../src/main'

const car = getCar()

document.body.innerHTML = `
<h1>Demo page</h1>
<p>This page can be used for development of your library.</p>
<p>Run <code>npm run dev</code> to serve this page.<br>Scripts for this page will be bundled from <code>/demo/demo.ts</code>, where the library is imported.<br>Live reloading enabled.</p>
<p>Run <code>npm run build</code> to build your library.<br>By default, output files will go to <code>/dist/</code> folder in project root.<br>Type definitions will be emitted and bundled alongside the main bundle.<br><code>package.json</code> will be automaticlly updated with the filenames of build output.<br>Costumize your output by modifying constants in <code>/rollup.config.js</code> in project root.</p>
<p><b>To get started</b>:
  <ul>
    <li>whipe everything from the <code>/src/</code> directory</li>
    <li>customize your library with constants in <code>/rollup.config.js</code> in project root</li>
    <li>write some source code in <code>/src/</code></li>
    <li>remove sample code from <code>/demo/demo.ts</code> and import your library</li>
    <li>run <code>npm run dev</code></li>
  </ul>
</p>
<p>Here's some test output from the sample library:</p>
<pre style="background: #f0f0f0">
${JSON.stringify(car, null, 2)}
</pre>
`
