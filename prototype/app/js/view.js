var UserItemView = Backbone.Marionette.ItemView.extend({
  tagName : "li",
  template : _.template("#user_template"),
  render : function(){
    this.$el.html(this.template(this.model.attributes))
    return this
  }
})

var UserListView = Backbone.Marionette.CollectionView.extend({
  itemView : UserItemView
})

// listのlist
var ColumnView = Backbone.Marionette.CollectionView.extend({
  itemView : UserListView
})