# Welcome To The Drug Supply chain for Pharma care
Pharma Care network is a platform where phrma care company can design a drug and take it to consumer in a secure and smart way.  In this document we will going through below topics which will help you to understand various functionalities available in this network. 
+	Setup HyperLedger network which create docker containers for various organization involved in this network 
+	Setup node module which allows client application to execute various methods available in the smart contract
+	Execute each method through postman 

# Pre-requisites
All you need to run this:
# Step 1: Bootstrap the network
Command:
1.	Locate ‘network’ folder under ‘pharma care’ folder of the project.
2.	Execute the command ./fabricNetwork.sh up, which will prompt for the confirmation to boot the network. Enter ‘Y’ in the terminal to bring up the network.
#Terminal Screenshot: 
![Picture1](https://user-images.githubusercontent.com/13790209/212477611-01f0331f-58cf-4961-8a05-c1af214449fe.gif)
![Picture2](https://user-images.githubusercontent.com/13790209/212478541-6df9aee2-0964-4bfc-9f30-6fab1c136717.gif)

# Step 2: Start the chaincode node application
This is needed only for the first time when you setup the network to have necessary node modules are available inside chaincode folder to instantiate smart contract.
Command: 
1.	Enter into docker container for chaincode using command docker exec -it chaincode /bin/bash
2.	Install node modules using ‘npm install’ command which will install all necessary Node modules inside chaincode container. 
3.	Start the node application: npm run start-dev

# Step 3: Chaincode Installation and Instantiation
Command: 
1.	Once Step 2 is complete, execute below command under ‘network’ folder which will install & instantiate the smart contracts in chaincode container and allow us to invoke different methods listed below. 
2.	./fabricNetwork.sh install

# Step 4: Start the chaincode node application
Command: 
1.	Go to ‘application’ folder available in ‘pharma care’ folder. 
2.	Install node modules using ‘npm install’ command which will install all necessary Node modules required to configure the API URLs to be called by client application. 
3.	Start the node application: node .

![Picture3](https://user-images.githubusercontent.com/13790209/212479107-6e2cbada-0a74-46ab-aa2c-b20a4fe33c1c.png)
![Picture4](https://user-images.githubusercontent.com/13790209/212479274-1232829e-02ff-4d81-a261-7c98128ea799.png)

# Step 5: Invoke Smart Contract through REST API
Initiation Collection
#addToWallet
In order to create each organization into the wallet, we need to have two files. In postman script, replace public and private key for each of the organization before executing ‘addToWallet’ method. 

Public Key
Designer: /home/upgrad/workspace/pharmacare/network/crypto-config/peerOrganizations/designer.pharma-network.com/users/Admin@designer.pharma-network.com/msp/signcerts/Admin@designer.pharma-network.com-cert.pem
Tester: /home/upgrad/workspace/pharmacare/network/crypto-config/peerOrganizations/tester.pharma-network.com/users/Admin@tester.pharma-network.com/msp/signcerts/Admin@tester.pharma-network.com-cert.pem
Regulator: /home/upgrad/workspace/pharmacare/network/crypto-config/peerOrganizations/regulator.pharma-network.com/users/Admin@regulator.pharma-network.com/msp/signcerts/Admin@regulator.pharma-network.com-cert.pem
Distributor: /home/upgrad/workspace/pharmacare/network/crypto-config/peerOrganizations/distributor.pharma-network.com/users/Admin@distributor.pharma-network.com/msp/signcerts/Admin@distributor.pharma-network.com-cert.pem
Manufacturer: /home/upgrad/workspace/pharmacare/network/crypto-config/peerOrganizations/manufacturer.pharma-network.com/users/Admin@manufacturer.pharma-network.com/msp/signcerts/Admin@manufacturer.pharma-network.com-cert.pem 

Private Key
Go to below folder for each of the organization and replace the highlighted value. 
Tester: /home/upgrad/workspace/pharmacare/network/crypto-config/peerOrganizations/tester.pharma-network.com/users/Admin@trester.pharma-network.com/msp/keystore/ 5f2b1842c284acb31320b2c4c8c54af75ed73ead88e49a46f1210f97c9e8f1de_sk
Designer: /home/upgrad/workspace/pharmacare/network/crypto-config/peerOrganizations/designer.pharma-network.com/users/Admin@designer.pharma-network.com/msp/keystore/ 706eadd3b87e0945e663c19f42b8df99d68d4b2d2a3a367b97be945c063d6ed5_sk
Regulator: /home/upgrad/workspace/pharmacare/network/crypto-config/peerOrganizations/regulator.pharma-network.com/users/Admin@regulator.pharma-network.com/msp/keystore/ 45FGtq5687e0945e66464gdfhht4353536462a3a367b4333effv336894c2f25rg_sk
Manufacturer: /home/upgrad/workspace/pharmacare/network/crypto-config/peerOrganizations/manufacturer.pharma-network.com/users/Admin@manufacturer.pharma-network.com/msp/keystore/ 4aa55d693d4828416a38510e6336af47bc046977b916433f64e6994b4917fc10_sk
Distributor: /home/upgrad/workspace/pharmacare/network/crypto-config/peerOrganizations/distributor.pharma-network.com/users/Admin@distributor.pharma-network.com/msp/keystore/ fe1faa1b5c31776fae4e8ab50f0b5610b704b783a53b9ce661e1f47ee873a529_sk


