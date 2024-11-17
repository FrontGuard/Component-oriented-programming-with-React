const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', (socket) => {
    console.log('Клієнт підключився');

    // Повідомлення від одного клієнта буде надіслано всім підключеним клієнтам
    socket.on('message', (message) => {
        console.log(`Повідомлення від клієнта: ${message}`);

        // Надсилання повідомлення всім клієнтам
        server.clients.forEach((client) => {
            if (client !== socket && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    socket.on('close', () => {
        console.log('Клієнт відключився');
    });
});

console.log('WebSocket сервер запущено на порту 3000');
