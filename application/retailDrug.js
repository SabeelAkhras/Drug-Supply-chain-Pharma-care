'use strict';
const helper = require('./contractHelper');

async function main(drugName, serialNo,retailerCRN, customerAadhar,organisationRole) {

	try {
		const pharmanetContract = await helper.getContractInstance(organisationRole);

		console.log('.....Requesting to create Retail Drug on the Network');
		const newPOBuffer = await pharmanetContract.submitTransaction('retailDrug', drugName, serialNo,retailerCRN, customerAadhar);

		// process response
		console.log('.....Processing Retail Drug Transaction Response \n\n');
		let updateShipmentObject = JSON.parse(newPOBuffer.toString());
		console.log(newPOBuffer.toString());
		return updateShipmentObject;

	} catch (error) {

		console.log(`\n\n ${error} \n\n`);
		throw new Error(error);

	} finally {

		// Disconnect from the fabric gateway
		helper.disconnect();

	}
}

module.exports.execute = main;
