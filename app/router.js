import Marionette from 'marionette'
import Controller from './controller'

const Router = Marionette.AppRouter.extend({
  initialize: function (options) {
    this.controller = new Controller({ app: options.app })
  },

  appRoutes: {
    'form': 'formRoute',
    'page/:id': 'page'    
  }
})

export default Router
