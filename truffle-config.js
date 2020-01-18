
module.exports = {
  compilers: {
    solc: {
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        remappings: ["remapped=./contracts"],
        optimizer: {
          enabled: false,
          runs: 200
        },
      }
    }
  }
}
