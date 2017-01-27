import { Meteor } from 'meteor/meteor';

Meteor.startup(() => { // in startup file because we want access from shared variables from other files
  if (Meteor.isServer) {
    Images.denyClient();

    /*
      Images.load('https://raw.githubusercontent.com/VeliovGroup/Meteor-Files/master/logo.png', {
        fileName: 'logo.png'
      });
    */
    
    Meteor.publish('files.images.all', function () {
      console.log("Here in publish: ")
      return Images.find().cursor;
    });
  }
});