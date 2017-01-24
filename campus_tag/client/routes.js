Router.configure({
  layoutTemplate: 'Applicationlayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});


Router.onBeforeAction('loading');