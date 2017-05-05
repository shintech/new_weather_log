import Marionette from 'marionette'
import Entries from './collections/Entries'
import EntriesView from './views/EntriesView'
import FormView from './views/FormView'

const Controller = Marionette.Object.extend({
  initialize: function (options) {
    this.app = options.app

    this.entries = new Entries()
  },

  index: function () {
    const app = this.app

    const entriesView = new EntriesView({
      collection: this.entries
    })

    this.entries.fetch({
      success: function () {
        app.view.showChildView('main', entriesView)
      },

      error: function (err) {
        console.log(err)
      }
    })
  },

  formRoute: function () {
    this.app.view.showChildView('main', new FormView({ collection: this.entries }))
  }
})

export default Controller
