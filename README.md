# Truffle remapping issue

This repository provides minimal configuration to compare `truffle` and `solc` compilation with `remappings` configuration.

When running `make solc` to compile the contracts using `solc` and JSON configuration - the compilation succeeds.

While using the same `remappings` configuration with `truffle` by running `make truffle`, it fails to compile due to some Resolver exception.
