const process = require('process');
  
// Printing current directory
console.log("Current working directory: ",
          process.cwd());
console.log("Current p directory: ",
          process.env.PWD);
const saf_action =  require('./run_command.js');

saf_action();
