// vite.config.ts
import Unocss from 'unocss/vite';
import Inspect from 'vite-plugin-inspect';
import { defineConfig } from 'vite';


export default defineConfig({
    esbuild: {
        jsxInject: `import h from 'vhtml';`,
        jsxFactory: "h",
        jsxFragment: "Fragment"

    },
    plugins: [
        Inspect(),
	Unocss({})
    ],
})
