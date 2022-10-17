const http = require('http');
const port = process.env.PORT || 3000;
let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello this is Node App running on Azure with continous integration and continous deployment(Devops Ideology)! \nAuthor is MR. Shridhar Karigoudar \n\n\n\n\n                                                                                         Thanks for visiting my First build'
  console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
