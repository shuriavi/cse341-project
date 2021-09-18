
const requestHandler = (req, res) => {
const url = req.url;
        if (url === '/') {
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Prove 1</title></head>');
            res.write('<body><form action="/create-user" method="POST"><input type="text" name= "username"><button type="submit">Submit</button></form></body>');
            res.write('</html>');
            return res.end();
        }
        if (url === '/user') {
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Prove 1</title></head>');
            res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
            res.write('</html>');
            return res.end();
        }
        
        if (url === '/create-user') {
            const body = [];
            req.on('data', (chunk) => {
                body.push(chunk);
            });
            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                console.log(parsedBody.split('=')[1]);
            });
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        };
};
        


module.exports = requestHandler;