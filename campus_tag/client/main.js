import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.images.helpers({
images:function(){
    return Images.find();         
  }
});

Template.descriptionForm.events({
  'change :file': function(event) {
     console.log("Change event: ", event);
     console.log("Files: ", event.target.files);  
  }
})