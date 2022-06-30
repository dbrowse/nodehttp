const http = require('http');

const todos = [
  {
    id: 1,
    text: 'Todo one'
  },
  {
    id: 2,
    text: 'Todo two'
  },
  {
    id: 3,
    text: 'Todo three'
  }
];

const server = http.createServer((req, res) => {
  console.log(req);
  const { header, url, method } = req;

  res.writeHead(200, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'Node.js'
  });

  console.log(req.headers.authorization);

  res.end(
    JSON.stringify({
      success: true,
      //error: 'Not found',
      data: todos
    })
  );
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
