// name
var User = Backbone.Model.extend({
  validate : function(attr){
    if(!attr.name){
      return "Empty name"
    }
  }
})

// collections
var UserList = Backbone.Collection.extend({
  model : User
})

