require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remember huge hover area olympic gasp'; 
let testAccounts = [
"0x4bb76e5bf5cc02a37eeaa47c10ed487c8c2c57915c6e39a5a3a4a9ddb789665c",
"0x3b0d4e53777b43f94dc45fae536df479aafc326a82d4ff171239cbd96424b566",
"0xa2436ceca42772b060fa71a8345fc5b99772b7f9edcd14b609481c899e40a2c4",
"0x3dca130ebe89f5fb0c062dc52e4c593723cc28d186ea37347c509c0abeb8554d",
"0xd0d92b075972943dc04252b25028de9ba7d6706d21558a57ce888f3bcbf08766",
"0x9dc4da0af213b864841c3e2861b51d42f4b7f0ee1c54bf912f8ff45fd0bdbaed",
"0xdb4435062c06829dd80388034783dcfe400ae4a5f19d768e01610bc1251fc42c",
"0x540247c9eeae2e1c7bf5d79e89b1dfbd4e7cdf8d84266d1c6bb9eaf5d2960228",
"0x228fef74fee1bca56e79060993fbdb6ce4a71467fdd07b79f0a7e596a42285b9",
"0x47c104acd3edb84031bb1c39efedf364dc41ab721e57f5da6a4d8269002bfce8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


