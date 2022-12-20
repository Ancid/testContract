

require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat:{
      forking: {
        url: "https://wispy-radial-hexagon.bsc-testnet.discover.quiknode.pro/36a87801368fe155bfac77aea1987d6f00c6cacb/",
        allowUnlimitedContractSize: true,
        timeout:90000
      }
    }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.BCSCAN_API_KEY,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.5",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },

      {
        version: "0.8.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },

      {
        version: "0.8.14",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  }
  // mocha: {
  //   reporter: 'xunit',
  //   reporterOptions: {
  //     output: 'GIVERS_TEST-results.xml'
  //   }
  // }
};
