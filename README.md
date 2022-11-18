
source : https://blog.logrocket.com/using-uups-proxy-pattern-upgrade-smart-contracts/#smart-contract-upgrade-demo-with-uups-proxy-pattern


proxy : 0xc26dc4B6739ec061a44f459eB49DC11E752dd966  (https://sepolia.etherscan.io/address/0xc26dc4b6739ec061a44f459eb49dc11e752dd966)

pizza : 0x55c4d5d7886389f9d7bD6841e801811Ea01512B6 // implementation 1

pizzav2 : 0xb85e47D3328AefA747A169Cf80F9923F67024509 // implementation 2

 to make implementation 2 inherit all the functions and storage states do inheritence is keyword in next coming implementation contracts

pizzav3 : 0x457EE0fd322da0878DAe80C3A499FDea142a7d30 // implementation 3


 to upgrade, the new version of contract should have new functions/storage slots and should inherit the the contract that it is going to upgrade.
 deploy the upgraded version and go to proxy contract and input new implementation address to UpgradeTO() function.
