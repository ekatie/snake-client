const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
    conn.write('Name: KTK');
    //   setInterval(() => conn.write('Move: up'), "3000");
    // });

    conn.on("data", () => {
      console.log('you ded cuz you idled');
    });

    return conn;
  };

  console.log("Connecting...");
  connect();

  module.exports = {connect};