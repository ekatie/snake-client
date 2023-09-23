const net = require('net');
const {IP, PORT} = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
    conn.write('Name: KTK');
  });

  conn.on("data", () => {
    console.log('you ded cuz you idled');
  });

  return conn;
};

module.exports = {connect};

/* Code for use with amended server game.js file
const net = require('net');
const {IP, PORT} = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
    conn.write('Name: KTK');
  });

  conn.on("data", (data) => {
    // Display "you ded cuz you idled" when game times out, or
    // "A new player has joined the game!" when another player joins
    console.log('Server message:', data);

  });
  return conn;
};

module.exports = {connect};
*/