import {crudTest} from './'

describe('Entries', function () {
  crudTest({
    model: 'entries',
    url: '/api/entries/',
    postAttributes: {
      name: 'name',
      attribute: 1
    },
    putAttributes: {
      name: 'updatedName',
      attribute: 2
    },
    extProperties: ['current_day']
  })
})
