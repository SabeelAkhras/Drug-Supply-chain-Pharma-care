'use strict';
const helper = require('./contractHelper');

async function main(buyerCRN, sellerCRN, drugName, quantity,organisationRole) {

	try {
		const pharmanetContract = await helper.getContractInstance(organisationRole);

		console.log('.....Requesting to create Purchase Order on the Network');
		const newPOBuffer = await pharmanetContract.submitTransaction('createPO', buyerCRN, sellerCRN, drugName, quantity);

		// process response
		console.log('.....Processing Approve New PO Transaction Response \n\n');
		let newPO = JSON.parse(newPOBuffer.toString());
		console.log(newPOBuffer.toString());
		return newPO;

	} catch (error) {

		console.log(`\n\n ${error} \n\n`);
		throw new Error(error);

	} finally {

		// Disconnect from the fabric gateway
		helper.disconnect();

	}
}

module.exports.execute = main;
