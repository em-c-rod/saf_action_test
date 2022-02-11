const core = require('@actions/core');
const saf = require('@mitre/saf');

try {
  // `command_string` input defined in action metadata file
  const command_string = core.getInput('command_string');
  saf.run(summary);
} catch (error) {
  core.setFailed(error.message);
}