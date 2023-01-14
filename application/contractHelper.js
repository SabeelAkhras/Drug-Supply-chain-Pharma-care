const fs = require('fs');
const yaml = require('js-yaml');
const { FileSystemWallet, Gateway } = require('fabric-network');
let gateway;


async function getContractInstance(organisationRole) {

	 gateway = new Gateway();

	
	const wallet = new FileSystemWallet('./identity/' + organisationRole);

	const fabricUserName = organisationRole.toUpperCase() + '_ADMIN';

	
	let connectionProfile = yaml.safeLoad(fs.readFileSync('./connection-profile-'+ organisationRole +'.yaml', 'utf8'));

	let connectionOptions = {
		wallet: wallet,
		identity: fabricUserName,
		discovery: { enabled: false, asLocalhost: true }
	};

	console.log('.....Connecting to Fabric Gateway');
	console.log('connection optios ' + JSON.stringify(connectionOptions) + connectionProfile);
	await gateway.connect(connectionProfile, connectionOptions);

	
	console.log('.....Connecting to channel - pharmachannel');
	const channel = await gateway.getNetwork('pharmachannel');

	console.log('.....Connecting to pharmanet Smart Contract');
	return channel.getContract('pharmanet', 'org.pharma-network.pharmanet');
}

function disconnect() {
	console.log('.....Disconnecting from Fabric Gateway');
	gateway.disconnect();
}

module.exports.getContractInstance = getContractInstance;
module.exports.disconnect = disconnect;
