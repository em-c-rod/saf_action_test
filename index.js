const process = require('process');
const saf_action =  require('./run_command.js');
  
// Printing current directory
console.log("Current working directory: ",
          process.cwd());
console.log("Current p directory: ",
          process.env.PWD);

// saf_action({safCLIPath: "/home/runner/work/_actions/mitre/saf_action/main/node_modules/@mitre/saf/lib/index.js"});
saf_action({safCLIPath: "/Users/runner/work/_actions/em-c-rod/saf_action/master/node_modules/@mitre/saf/lib/index.js"});
