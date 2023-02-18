#!/bin/sh

# Load the configuration file
config=$(cat config.json)

# Check if postinstall has already been executed
if echo $config | grep -q "postinstall_executed.*false"; then
  # Execute the desired commands
    npx react-native eject && cd ios && pod install
    
  # ...

  # Update the flag in the configuration file to indicate that postinstall has been executed
  echo $config | sed 's/"postinstall_executed.*/"postinstall_executed": true/' > config.json
fi