const core = require('@actions/core');
const saf = require('@mitre/saf');

const command_string = core.getInput('command_string');

const { exec } = require("child_process");
exec("PATH=$(npm bin):$PATH " + "saf " + command_string, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(stderr);
        return;
    }
    console.log(stdout);
});

// try {
//   // `command_string` input defined in action metadata file
//   const command_string = core.getInput('command_string');
//   saf.run(command_string);
// } catch (error) {
//   core.setFailed(error.message);
// }