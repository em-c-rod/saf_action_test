# (TEST) saf_action
GitHub Action for [SAF CLI](https://github.com/mitre/saf)

## Input and Output Arguments
### Input
#### `command_string` (Required)

Command string to be executed by SAF CLI.
Example:

* `convert:asff2hdf -i asff-findings.json -o output-file-name.json`

### Output
As determined by input command.

## Secrets

This action does not use any GitHub secrets at this time.

## Environment Variables

Internally, the action's entrypoint uses the environment variables passed via action inputs. GitHub converts inputs to environment variables by prefixing them with `INPUT_`. Example: `INPUT_COMMAND_STRING`.

## Example

Below is an example action.

```
on: [push]
jobs:
  heimdall_tools_conversion:
    runs-on: ubuntu-latest
    name: SAF CLI Convert ASFF to HDF
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Convert ASFF
        uses: mitre/saf_action@main
        with:
          command_string: 'saf convert:asff2hdf -i asff_sample.json -o asff_sample_hdf.json'
```

## Contributing, Issues and Support

### Contributing

Please feel free to look through our issues, make a fork and submit _PRs_ and improvements. We love hearing from our end-users and the community and will be happy to engage with you on suggestions, updates, fixes or new capabilities.

### Issues and Support

Please feel free to contact us by **opening an issue** on the issue board, or, at [inspec@mitre.org](mailto:inspec@mitre.org) should you have any suggestions, questions or issues. If you have more general questions about the use of our software or other concerns, please contact us at [opensource@mitre.org](mailto:opensource@mitre.org).

### NOTICE

© 2019-2020 The MITRE Corporation.

Approved for Public Release; Distribution Unlimited. Case Number 18-3678.

### NOTICE

MITRE hereby grants express written permission to use, reproduce, distribute, modify, and otherwise leverage this software to the extent permitted by the licensed terms provided in the LICENSE.md file included with this project.

### NOTICE

This software was produced for the U. S. Government under Contract Number HHSM-500-2012-00008I, and is subject to Federal Acquisition Regulation Clause 52.227-14, Rights in Data-General.

No other use other than that granted to the U. S. Government, or to those acting on behalf of the U. S. Government under that Clause is authorized without the express written permission of The MITRE Corporation.

For further information, please contact The MITRE Corporation, Contracts Management Office, 7515 Colshire Drive, McLean, VA 22102-7539, (703) 983-6000.