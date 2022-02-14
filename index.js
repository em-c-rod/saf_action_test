const core = require('@actions/core');
const saf = require('@mitre/saf');

const command_string = core.getInput('command_string');

const { exec } = require("child_process");
console.log(__dirname);
console.log(process.cwd());
// "PATH=$(npm bin):$PATH "
saf(command_string.split(" "));
// exec("node_modules/bin " + "saf " + command_string, (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(stderr);
//         return;
//     }
//     console.log(stdout);
// });