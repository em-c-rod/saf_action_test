const process = require('process');
const saf_action =  require('./run_command.js');
import path from 'path'
  
// Printing current directory
console.log("Current working directory: ",
          process.cwd());
console.log("Current p directory: ",
          process.env.PWD);
console.log("Current HOME: ",
          process.env.HOME);
console.log("Current GITHUB_WORKSPACE: ",
          process.env.GITHUB_WORKSPACE);
console.log("Current GITHUB_EVENT_PATH: ",
          process.env.GITHUB_EVENT_PATH);

// saf_action({safCLIPath: "/home/runner/work/_actions/mitre/saf_action/main/node_modules/@mitre/saf/lib/index.js"});
saf_action({safCLIPath: path.join(process.env.HOME, 'work/_actions/em-c-rod/saf_action_test/master/node_modules/@mitre/saf/lib/index.js')});
