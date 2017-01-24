Router.configure({
  layoutTemplate: 'Applicationlayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'home',
  template: 'home'
});
Router.onBeforeAction('loading');