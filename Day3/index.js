// create a server using http

const http = require('http');
const PORT = 3000

const serverHandler = (req, res) => {
    const data = [
        "raipur",
        "delhi"
    ]
    res.end(JSON.stringify(data))
};

const server = http.createServer(serverHandler);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


