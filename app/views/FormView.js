import Entry from '../models/Entry'

const FormView = Backbone.Marionette.View.extend({
  template: require('../templates/form-view-template.html'),
  tagName: 'form',

  ui: {
    submit: '.submit-button'
  },

  events: {
    'click @ui.submit': 'handleSubmit'
  },

  initialize: function () {
    this.entry = new Entry()
  },

  handleSubmit: function (e) {
    e.preventDefault()

    const entryAttrs = {
      temp_low: $('#temp_low_input').val(),
      temp_hi: $('#temp_hi_input').val()
    }

    this.entry.save(entryAttrs, {
      success: function () {
        submitMessage('Successfully created...')
      },
      error: function () {
        submitMessage('Submission error...')
        $('.message-block').addClass('has-error')
      }
    })
    this.collection.add(this.entry)
  }
})

function submitMessage (message) {
  const messageBlock = $('.message-block')
  messageBlock.html(message).removeClass('hidden has-error')
}

export default FormView
