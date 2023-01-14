'use strict';

/**
 * This is a Node.JS application to view history of an medicine on the network
 */

const helper = require('./contractHelper');
async function main(drugName, serialNo,organisationRole) {

	try {
		const pharmanetContract = await helper.getContractInstance(organisationRole);

		console.log('.....Requesting to view history on the Network');
		const newPOBuffer = await pharmanetContract.submitTransaction('viewHistory', drugName, serialNo);

		// process response
		console.log('.....Processing view history of  Drug Transaction Response \n\n');
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
