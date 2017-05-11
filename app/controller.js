import Marionette from 'marionette'
import Entries from './collections/Entries'
import EntriesView from './views/EntriesView'
import FormView from './views/FormView'
import Pagurbate from 'pagurbate'

const Controller = Marionette.Object.extend({
  initialize: function (options) {
    this.app = options.app
  },

  page: function (id) {
    const app = this.app

    this.entries = new Entries({ id: id })

    const entriesView = new EntriesView({
      collection: this.entries
    })

    this.entries.fetch({
      success: function (data) {
        app.view.showChildView('main', entriesView)
        app.view.showChildView('footer', new Pagurbate({ pageData: data.pageData}))
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
