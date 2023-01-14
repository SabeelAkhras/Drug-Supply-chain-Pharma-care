'use strict';

const fs = require('fs'); 
const { FileSystemWallet, X509WalletMixin } = require('fabric-network'); 
const path = require('path'); 

const crypto_materials = path.resolve(__dirname, '../network/crypto-config'); 


async function main(certificatePath, privateKeyPath, organisationRole) {

	try {

		const certificate = fs.readFileSync(certificatePath).toString();	
		const privatekey = fs.readFileSync(privateKeyPath).toString();
		const identityLabel = organisationRole.toUpperCase() + '_ADMIN';
		const identity = X509WalletMixin.createIdentity(organisationRole + 'MSP', certificate, privatekey);

    const wallet = new FileSystemWallet('./identity/'+organisationRole);
		await wallet.import(identityLabel, identity);

	} catch (error) {
		console.log(`Error adding to wallet. ${error}`);
		console.log(error.stack);
		throw new Error(error);
	}
}

module.exports.execute = main;
