import { getInput } from '@actions/core';
import { run } from '@mitre/saf';

const command_string = getInput('command_string');
if(!command_string) {
    throw new Error("SAF CLI Command String argument is required.");
}

if(command_string.split(" ")[0] == "view:heimdall") {
    throw new Error("The SAF Action does not support the 'view:heimdall' command. Please reference the documentation for other uses.")
}

run(command_string.split(" "));