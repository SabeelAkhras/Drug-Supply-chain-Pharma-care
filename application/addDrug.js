'use strict';

const helper = require('./contractHelper');

async function main(drugName, serialNo, mfgDate, expDate, companyCRN,organisationRole) {

	try {
		const pharmanetContract = await helper.getContractInstance(organisationRole);

		console.log('.....Requesting to create a New drug on the Network');
		const newDrugBuffer = await pharmanetContract.submitTransaction('addDrug', drugName, serialNo, mfgDate, expDate, companyCRN);
		console.log('.....Processing Approve New Drug Transaction Response \n\n');
		let newUser = JSON.parse(newDrugBuffer.toString());
		console.log(newDrugBuffer.toString());
		return newUser;

	} catch (error) {

		console.log(`\n\n ${error} \n\n`);
		throw new Error(error);

	} finally {

		// Disconnect from the fabric gateway
		helper.disconnect();

	}
}

module.exports.execute = main;
