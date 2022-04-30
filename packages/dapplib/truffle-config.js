require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strong rival oval method good kangaroo army gift'; 
let testAccounts = [
"0xe1073c9ebb7404af762e33ad086ed3a6e9c5381c1630bfe14814cffaf3273132",
"0x74e90f3def79112a292bd904c6b95f8b7a5eb1abcb8b19e11d5bcfe1c7807f40",
"0xe25384cc3b17416ff747b9cf7157a0b0fe24234e8ca36b0396a53a0c915d3b64",
"0x9c6423041be057548c63d925bf8ae424d74429e975da926c5fa9e1a338b18f39",
"0x13e11d0f65899649f9f204a5de987cb6eb981516f7f3662d688f93e359442170",
"0x6bd8734da8b6794cd94b2dc6b180d80a263c1b2f9e8a76228e83ed99dec5b01d",
"0xc6aca871e666a8a1b3ad68a4c3b11836839278f0a033c0da0f0e1afeca1412d6",
"0x7ca6afeca3b40dc4b03b7fbccfc0da39998fb7d0b294b02bdc28a1145c0b4abf",
"0x20294032f166b9592fec6ceeafc277986d027316e88f3e99041cf2d19bc77519",
"0xe37bac5e5fd95918f797ffc367fa539f91535bffeb5d0b3e62091b965061e355"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

