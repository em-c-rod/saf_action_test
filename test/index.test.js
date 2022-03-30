const path = require('path');
const saf_action =  require('../index.js');

describe('SAF Action tests', () => {
  it('should run SAF with a space topic separator in the command string', async () => {
    let inputFilePath = path.resolve('./test/sample_data/red_hat_good.json');
    process.env['INPUT_COMMAND_STRING'] = `view summary -i ${inputFilePath}`;
    require('../index.js');
    await saf_action();
    delete process.env['INPUT_COMMAND_STRING'];
  });
  it('should run SAF with a semicolon topic separator in the command string', async () => {
    let inputFilePath = path.resolve('./test/sample_data/red_hat_good.json');
    process.env['INPUT_COMMAND_STRING'] = `view:summary -i ${inputFilePath}`;
    await saf_action();
    delete process.env['INPUT_COMMAND_STRING'];
  });
});