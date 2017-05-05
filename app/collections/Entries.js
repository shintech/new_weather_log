import Entry from '../models/Entry'

const Entries = Backbone.Collection.extend({
  entry: Entry,
  url: 'http://shintech.ninja:8000/api/entries'
})

export default Entries
