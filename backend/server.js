const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Define custom routes or additional middleware if needed

    // Default route handling
    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.get('/', (req, res) => {
        res.json({name: "Kieu Tien Thanh", message: "Hello Client, I'm server"})
    })

    const PORT = process.env.PORT || 3000;

    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
    });
});