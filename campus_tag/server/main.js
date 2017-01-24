import { Meteor } from 'meteor/meteor';

Meteor.startup(() => { // in startup file because we want access from shared variables from other files
  if (Meteor.isServer) {
    Images.denyClient();
    Meteor.publish('files.images.all', function () {
      console.log("Here in publish: ")
      return Images.find().cursor;
    });
  }

  if (Meteor.isClient) {
    Meteor.subscribe('files.images.all');
  }
});