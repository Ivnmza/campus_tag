import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  console.log("Server says hello at: " + new Date() );
  Issues = new Mongo.Collection("issues");
  console.log(Issues.find().count());
});
