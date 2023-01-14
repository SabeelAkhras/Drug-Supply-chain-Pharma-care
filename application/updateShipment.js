'use strict';
const helper = require('./contractHelper');

async function main(buyerCRN, drugName, transporterCRN,organisationRole) {

	try {
		const pharmanetContract = await helper.getContractInstance(organisationRole);

		console.log('.....Requesting to update shipment of an PO on the Network');
		const newPOBuffer = await pharmanetContract.submitTransaction('updateShipment', buyerCRN, drugName, transporterCRN);

		// process response
		console.log('.....Processing Shipment fof PO Transaction Response \n\n');
		let updateShipmentObject = JSON.parse(newPOBuffer.toString());
		console.log(newPOBuffer.toString());
		return updateShipmentObject;

	} catch (error) {

		console.log(`\n\n ${error} \n\n`);

	} finally {

		// Disconnect from the fabric gateway
		helper.disconnect();

	}
}

module.exports.execute = main;
