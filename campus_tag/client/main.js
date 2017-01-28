import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.images.helpers({
images:function(){
    return Images.find();         
  }
});
Template.descriptionForm.helpers({
});

Template.descriptionForm.events({
  'change :file': function(event, template) {
     
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
      var files = event.target.files;
      for (var i = 0, ln = files.length; i < ln; i++) {
      Images.insert(files[i], function (err, fileObj) {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
        if (err){
             // handle error
             console.log("Error: ", err);
          } else {
             // handle success depending what you need to do
            console.log("Success");
          }
      });
    }

     Session.set('log', log);




     console.log("Change event: ", event);
     console.log("Files ", event.target.files);
  },
  'submit #descForm': function(event) {
    console.log('Form Submitted');
    event.preventDefault();

  }
});