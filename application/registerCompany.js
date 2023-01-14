'use strict';
const helper = require('./contractHelper');
async function main(companyCRN, companyName, location, organisationRole) {

	try {
		const pharmanetContract = await helper.getContractInstance(organisationRole);

		console.log('.....Requesting to create a New company on the Network');
		const newCompanyBuffer = await pharmanetContract.submitTransaction('registerCompany', companyCRN, companyName, location, organisationRole);
		console.log('.....Processing Approve New Company Transaction Response \n\n');
		let newUser = JSON.parse(newCompanyBuffer.toString());
		console.log(newCompanyBuffer);
		return newUser;

	} catch (error) {

		console.log(`\n\n ${error} \n\n`);
		throw new Error(error);

	} finally {

		helper.disconnect();

	}
}

module.exports.execute = main;
