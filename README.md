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
![Picture5](https://user-images.githubusercontent.com/13790209/212479718-801c4e63-88fa-4545-a7f8-37b59411c3af.png)
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

#Public Key
1. Designer: /home/upgrad/workspace/pharmacare/network/crypto-config/peerOrganizations/designer.pharma-network.com/users/Admin@designer.pharma-network.com/msp/signcerts/Admin@designer.pharma-network.com-cert.pem
2. Tester: /home/upgrad/workspace/pharmacare/network/crypto-config/peerOrganizations/tester.pharma-network.com/users/Admin@tester.pharma-network.com/msp/signcerts/Admin@tester.pharma-network.com-cert.pem
3. Regulator: /home/upgrad/workspace/pharmacare/network/crypto-config/peerOrganizations/regulator.pharma-network.com/users/Admin@regulator.pharma-network.com/msp/signcerts/Admin@regulator.pharma-network.com-cert.pem
4. Distributor: /home/upgrad/workspace/pharmacare/network/crypto-config/peerOrganizations/distributor.pharma-network.com/users/Admin@distributor.pharma-network.com/msp/signcerts/Admin@distributor.pharma-network.com-cert.pem
5. Manufacturer: /home/upgrad/workspace/pharmacare/network/crypto-config/peerOrganizations/manufacturer.pharma-network.com/users/Admin@manufacturer.pharma-network.com/msp/signcerts/Admin@manufacturer.pharma-network.com-cert.pem 

#Private Key
1. Tester: /home/upgrad/workspace/pharmacare/network/crypto-config/peerOrganizations/tester.pharma-network.com/users/Admin@trester.pharma-network.com/msp/keystore/ 5f2b1842c284acb31320b2c4c8c54af75ed73ead88e49a46f1210f97c9e8f1de_sk
2. Designer: /home/upgrad/workspace/pharmacare/network/crypto-config/peerOrganizations/designer.pharma-network.com/users/Admin@designer.pharma-network.com/msp/keystore/ 706eadd3b87e0945e663c19f42b8df99d68d4b2d2a3a367b97be945c063d6ed5_sk
3. Regulator: /home/upgrad/workspace/pharmacare/network/crypto-config/peerOrganizations/regulator.pharma-network.com/users/Admin@regulator.pharma-network.com/msp/keystore/ 45FGtq5687e0945e66464gdfhht4353536462a3a367b4333effv336894c2f25rg_sk
4. Manufacturer: /home/upgrad/workspace/pharmacare/network/crypto-config/peerOrganizations/manufacturer.pharma-network.com/users/Admin@manufacturer.pharma-network.com/msp/keystore/ 4aa55d693d4828416a38510e6336af47bc046977b916433f64e6994b4917fc10_sk
5. Distributor: /home/upgrad/workspace/pharmacare/network/crypto-config/peerOrganizations/distributor.pharma-network.com/users/Admin@distributor.pharma-network.com/msp/keystore/ fe1faa1b5c31776fae4e8ab50f0b5610b704b783a53b9ce661e1f47ee873a529_sk


![pic](https://user-images.githubusercontent.com/13790209/212480003-128d9383-835f-4f1f-8cc7-3ae221d30ae9.jpg)
![pic2](https://user-images.githubusercontent.com/13790209/212480007-8ad7f58b-f6d2-44b2-bdb6-ae242415474d.jpg)
![pic5](https://user-images.githubusercontent.com/13790209/212480459-bdb0da7e-3129-4403-89c4-cdbe65c48dc7.png)

# Supply Chain Collection

Below post man scripts to be executed for each of the functions mentioned below. 

<table>
    <tbody>
        <tr>
            <th> Method </th>
            <th> Functionality </th>
            <th> Postman script </th>         
        </tr>
        <tr>
            <td align="center"> SC1 </td>
            <td align="center"> Create design by Disgner </td>
            <td align="center"> part-a-1-designer-createDe </td>       
        </tr>
        <tr>
            <td align="center"> SC2 </td>
            <td align="center"> Create test document by tester </td>
            <td align="center"> part-a-2-tester-createUT </td>       
        </tr>
        <tr>
            <td align="center"> SC3 </td>
            <td align="center"> Create approve document by regulator </td>
            <td align="center"> part-a-3-regulator-createAD </td>       
        </tr>
        <tr>
            <td align="center"> SC4 </td>
            <td align="center"> Create PO by Distributor </td>
            <td align="center"> part-b-1-distributor-createPO </td>       	
        </tr>
        <tr>
            <td align="center"> SC5 </td>
            <td align="center">  Create shipment by Manufacturer </td>
            <td align="center"> part-b-2-manufacturer-createShipment </td>
        </tr>
    </tbody>
</table>
