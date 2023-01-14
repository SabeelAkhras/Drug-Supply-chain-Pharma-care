'use strict';

const helper = require('./contractHelper');

async function main(buyerCRN, drugName, listOfAssets,transporterCRN,organisationRole) {

	try {
		const pharmanetContract = await helper.getContractInstance(organisationRole);

		console.log('.....Requesting to create shipment for an PO on the Network');
		const newPOBuffer = await pharmanetContract.submitTransaction('createShipment', buyerCRN, drugName, listOfAssets,transporterCRN);

		// process response
		console.log('.....Processing Create Shipment Transaction Response \n\n');
		let newPO = JSON.parse(newPOBuffer.toString());
		console.log(newPOBuffer.toString());
		return newPO;

	} catch (error) {

		console.log(`\n\n ${error} \n\n`);
		// throw new Error(error);

	} finally {

		// Disconnect from the fabric gateway
		helper.disconnect();

	}
}

main("DIST001","Paracetamol","001,002,003","TRA001","manufacturer").then(() => {
	console.log('Shipment added on the Network');
});

module.exports.execute = main;
