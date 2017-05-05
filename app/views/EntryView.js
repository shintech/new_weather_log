const EntryView = Backbone.Marionette.View.extend({
  tagName: 'li',
  template: require('../templates/entry-view-template.html')
})

export default EntryView