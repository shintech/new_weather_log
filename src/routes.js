import express from 'express'
import {entries} from './db'

export default function getRouter (options) {
  const router = express.Router()

  router.route('/entries')
    .get(function (req, res, next) {
      entries.getAllEntries(req, res, next, options)
    })
    .post(function (req, res, next) {
      entries.createEntry(req, res, next, options)
    })

  router.route('/entries/:id')
    .get(function (req, res, next) {
      entries.getSingleEntry(req, res, next, options)
    })
    .put(function (req, res, next) {
      entries.updateSingleEntry(req, res, next, options)
    })
    .delete(function (req, res, next) {
      entries.removeEntry(req, res, next, options)
    })

  return router
}
