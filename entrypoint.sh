#!/bin/sh

set -e

echo "Hello, World"
if [ -n "$INPUT_COMMAND_STRING" ]; then
  echo "Using $(saf version)"
  saf $INPUT_COMMAND_STRING
else
  echo "SAF CLI Command String argument is required.";
  exit 1;
fi