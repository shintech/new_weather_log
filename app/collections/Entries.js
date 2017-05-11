import Entry from '../models/Entry'

const Entries = Backbone.Collection.extend({
  entry: Entry,
  initialize: function (options) {
    this.url = 'http://shintech.ninja:8000/api/entries?page=' + options.id
  },
  
  parse: function (response) {
    this.pageData = response.pageData
    
    return response.models
  }
})

export default Entries
