import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Issues = new Mongo.Collection("issues");

if(Meteor.isClient) {
  console.log("client says hello");
}