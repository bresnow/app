import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import Gun from "gun"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const gun = Gun({
    web: app.listen(3000, () => {
        console.log("JOY framework and relay server")
    })
});



// # TODO:
// # - [ ] Add a way to configure the relay server
// # - [ ] Add a way to configure the relay server
// # - [ ] Add a way to configure the relay server
// # - [ ] Add a way to configure the relay server
// # -
