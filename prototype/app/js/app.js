var App = new Backbone.Marionette.Application()

App.addRegions({
  main : "#main"
})

// mock
App.addInitializer(function(){
  var mockUser = new User("hoge")
  //console.log(mockUser)
  
})