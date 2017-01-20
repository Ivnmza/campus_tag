import { Meteor } from 'meteor/meteor';

Issues = new Mongo.Collection("issues");

Meteor.startup(() => {
  // code to run on server at startup
  console.log("Server says we have a total of "+ Issues.find().count() + " issues.");
});
