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
     var $this = $(event.target);
     var input = $this;
     var numfiles = input.get(0).files ? input.get(0).files.length : 1;
     var label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
     console.log(label, numfiles);
  }
})