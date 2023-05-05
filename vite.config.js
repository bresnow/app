// vite.config.ts
import Inspect from 'vite-plugin-inspect';
import { defineConfig } from 'vite';

export default defineConfig({
    esbuild: {
        jsxInject: `import 'joy-jsx';`,
        jsxFactory: "JOY.jsxFactory",

    },
    plugins: [
        Inspect(),
        
    ]
})
