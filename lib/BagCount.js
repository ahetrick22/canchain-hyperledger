'use strict';

const { Contract } = require('fabric-contract-api');

class BagCount extends Contract {

 //update ledger with a greeting 
 async instantiate(ctx) {
   let greeting = { text: 'Instantiate was called!' };
   await ctx.stub.putState('GREETING', Buffer.from(JSON.stringify(greeting)));
   this.deliveryId = 1;
 }

 //add a member along with their email, name, address, and number
 async addDelivery(ctx, centerName, count) {
   let delivery = {
     centerName, count
   };
   await ctx.stub.putState(this.deliveryId, Buffer.from(JSON.stringify(member)));
   this.deliveryId++;
   return JSON.stringify(delivery);
 }



 // look up data by key
 async query(ctx, key) {
   console.info('querying for key: ' + key  );
   let returnAsBytes = await ctx.stub.getState(key);
   let result = JSON.parse(returnAsBytes);
   return JSON.stringify(result);
 }

}

module.exports = BagCount;