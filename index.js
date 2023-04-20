const process = require('process');
const saf_action =  require('./run_command.js');
const path = require('node:path');
  
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

console.log("Current GITHUB_ACTION_PATH: ",
          process.env.GITHUB_ACTION_PATH);


console.log("Entire Environment: ",
          process.env);

// saf_action({safCLIPath: "/home/runner/work/_actions/mitre/saf_action/main/node_modules/@mitre/saf/lib/index.js"});
saf_action({safCLIPath: path.join(process.env.HOME, 'work/_actions/', process.env.GITHUB_ACTION_REPOSITORY, process.env.GITHUB_REF_NAME, 'node_modules/@mitre/saf/lib/index.js')});
