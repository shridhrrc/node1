const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello this is Node App running on Azure with continous integration and continous deployment(Devops Ideology)! \nAuthor is MR. Shridhar Karigoudar \n\n\n\n\n                                                            Thanks for visiting the build'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
