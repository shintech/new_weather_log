import {init as db} from '../'
import pagurbation from 'pagurbation'

function getAllEntries (req, res, next) {
  db.any('select * from entries')
  .then(function (data) {
    res.status(200)
    .json(pagurbation(req, data, 50))
  })
  .catch(function (err) {
    return next(err)
  })
}

function createEntry (req, res, next) {
  db.none('insert into entries( temp_low, temp_hi )' + 'values( ${temp_low}, ${temp_hi} )', req.body) // eslint-disable-line
  .then(function () {
    res.status(200)
    .json({
      status: 'success',
      message: 'Inserted one entry...'
    })
  })
  .catch(function (err) {
    return next(err)
  })
}

function getSingleEntry (req, res, next) {
  const entryID = parseInt(req.params.id)
  db.one('select * from entries where id = $1', entryID)
  .then(function (data) {
    res.status(200)
    .json(data)
  })
  .catch(function (err) {
    return next(err)
  })
}

function updateSingleEntry (req, res, next) {
  const entryID = parseInt(req.params.id)
  db.none('update entries set name=$1, attribute=$2 where id=$3', [req.body.name, req.body.attribute, entryID])
  .then(function (done) {
    res.status(200)
    .json({
      status: 'success',
      message: 'Updated one entry...'
    })
  })
  .catch(function (err) {
    return next(err)
  })
}

function removeEntry (req, res, next) {
  var entryID = parseInt(req.params.id)
  db.result('delete from entries where id = $1', entryID)
  .then(function (data) {
    res.status(200)
    .json({
      status: 'success',
      message: `Removed ${data.rowCount} entry`
    })
  })
  .catch(function (err) {
    return next(err)
  })
}

export default {
  getAllEntries,
  createEntry,
  getSingleEntry,
  updateSingleEntry,
  removeEntry
}
