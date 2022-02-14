const core = require('@actions/core');
const saf = require('@mitre/saf');

const command_string = core.getInput('command_string');
saf.run(command_string.split(" "));