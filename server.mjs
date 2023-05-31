import express from 'express';
import Gun from 'gun';
import path from 'path';
import { fileURLToPath } from 'url';

var port = 3369;
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()

const gun = Gun({
    radisk: true,
    web: app.listen(port, function () {
        console.log('Server started on port ' + port + ' with /gun');
    })
});

gun.get('hashroute').put({ hello: "world" })