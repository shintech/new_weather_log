import EntryView from './EntryView'

const EntriesView = Backbone.Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: EntryView
})

export default EntriesView
