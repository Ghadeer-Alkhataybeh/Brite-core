// Assuming you have already done 'npm install fernet'
let fernet = require("fernet");
let secret = new fernet.Secret("TluxwB3fV_GWuLkR1_BzGs1Zk90TYAuhNMZP_0q4WyM=");

let message =
  "gAAAAABcQNFoQK68eZS-Q4oPoU118cqy8XPDFbMlBQHxe24mLhLntKnTcfjMQkbWNsXWrZBPCCqk7vmQzRtvpxdm1g9saITar_hBPT3ghODEKJYKMSR51_bugCcu7CmRgBnAg3yPISFIPNBX2hlLkUX4RogYfAg6BBF9ecj4Hxah40gA-8aypxgw0JKQHmtPIkh5M8GufODT";
let token = new fernet.Token({ secret: secret, token: message, ttl: 0 });

token.decode();
console.log(token.decode());

// decoded message was : https://engineering-application.britecore.com/e/t17e119s0t/midLevelFrontendDeveloper