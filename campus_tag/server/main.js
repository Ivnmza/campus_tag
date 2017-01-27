import { Meteor } from 'meteor/meteor';

 // in startup file because we want access from shared variables from other files
 Meteor.startup(function(){
if (Images.find().count() == 0){
  console.log("No images yet");
  }// end of if have no images
});


Images.deny({
 insert: function(){
 return false;
 },
 update: function(){
 return false;
 },
 remove: function(){
 return false;
 },
 download: function(){
 return false;
 }
 });

Images.allow({
 insert: function(){
 return true;
 },
 update: function(){
 return true;
 },
 remove: function(){
 return true;
 },
 download: function(){
 return true;
 }
});