import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import { createServer as createViteServer } from 'vite'
import Gun from "gun"
const __dirname = path.dirname(fileURLToPath(import.meta.url))

    const app = express()
    const vite = await createViteServer({
        server: { middlewareMode: true },
        // appType: 'custom'
    })

    app.use(vite.middlewares)

    app.use('*', async (req, res) => {
        const url = req.originalUrl

        try {
            // 1. Read index.html
            let html = fs.readFileSync(
                path.resolve(__dirname, 'index.html'),
                'utf-8',
            )

            res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
        } catch (e) {
            // If an error is caught, let Vite fix the stack trace so it maps back
            // to your actual source code.
            vite.ssrFixStacktrace(e)
            next(e)
        }
    })

    // Create GUN relay server for P2P networking
    const gun = Gun({
        web: app.listen(5173, () => {
            console.log("JOY framework and relay server is listening on port 5173")
        })
    })

gun.get("client/ws/connection").put({ reload: true }) 