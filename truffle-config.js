module.exports = {
  networks: {
      development: {
          host: 'localhost',
          port: 8545,
          network_id: '3',
          gas: 4000000,
          gasPrice: 180e9,
          // following address needed to be replaced with unlocked account on gwan node
          from: '0x14ef9a5100dc4dccda028fa4936e63e31c75c5e1'
      }
  },
  compilers: {
    solc: {
      version:"0.5.11"  // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
}
}