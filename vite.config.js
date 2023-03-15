// vite.config.ts
import Unocss from 'unocss/vite';
import Inspect from 'vite-plugin-inspect';
import { defineConfig } from 'vite';
import {presetAttributify} from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
    esbuild: {
        jsxInject: `import h from 'vhtml';`,
        jsxFactory: "h",

    },
    plugins: [
        Inspect(),
        Unocss({
            presets: [
                presetAttributify({
                    ignoreAttributes: [
                        'name'
                    ]
                }),
            ],
            transformers: [
                transformerAttributifyJsx(), // <--
            ],
        })
    ],
})
