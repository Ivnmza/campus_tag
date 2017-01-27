import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.images.helpers({
images:function(){
    return Images.find();         
  }
});
Template.descriptionForm.helpers({
})
Template.descriptionForm.events({
  'change :file': function(event) {
     console.log("Change event: ", event);
     var $this = $(event.target);
     var input = $this;
     var numFiles = input.get(0).files ? input.get(0).files.length : 1;
     var label = input.val().replace(/\\/g, '/').replace(/.*\//, '');

     var text = $this.parents('.input-group').find(':text');
     var log = numFiles > 1 ? numFiles + ' files selected' :label;

     if( text.length ) {
        text.val(log);
      } else {
        if( log ) alert(log);
      }

     Session.set('log', log);
  }
})