Router.route('/', function() {
  this.render('home')
})
Router.route('/report', function() {
  this.render('report')
})

Router.route('assets/app/uploads/Images/:_id', function () {
  var params = this.params;
  var id = this.params._id;
})
