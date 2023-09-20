const client = require('./client');
const {UP_KEY, LEFT_KEY, DOWN_KEY, RIGHT_KEY, TAUNT_KEY, EAT_KEY} = require('./constants');

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  switch (key) {
    case 'w':
      connection.write(UP_KEY);
      break;
    case 'a':
      connection.write(LEFT_KEY);
      break;
    case 's':
      connection.write(DOWN_KEY);
      break;
    case 'd':
      connection.write(RIGHT_KEY);
      break;
    case 'b':
      connection.write(TAUNT_KEY);
      break;
    case 'e':
      connection.write(EAT_KEY);
      break;
    case '\u0003':
      process.exit();
  }
};

module.exports = {setupInput};