var mongoose = require('mongoose');
var _ = require('lodash');
var Sheet = mongoose.model('Sheet');


/**
 * List
 */
exports.all = function(req, res) {
  Sheet.find({})
  .then(() => res.json(Sheets))
  .catch((err) => res.status(400).send(err));
};

/**
 * Find a Sheet?
 */
exports.one = function(req, res) {
  Sheet.findById(req.params.sheetId)
  .then(sheet => res.json(sheet))
  .catch(err => res.status(400).send(err));
 };

 /**
  * Add a Sheet
  */
 exports.addSheetToSpace = function(req, res) {
   Sheet.create({
    name: 'Sheet Name', 
    workspace: req.params.spaceId, 
    content: { 
        grid: req.body.grid || [], 
        columnHeaders: req.body.columnHeaders || [{ id: '100', type: 'ID', name: 'Record Name', idx: 0 }]
      }
    })
    .then(sheet => res.json(sheet))
    .catch(err => res.status(400).send(err))
 };



// /**
//  * Add a Sheet
//  */
// exports.add = function(req, res) {
//   console.log("hello",req.body)
//   Sheet.create(req.body)
//   .then(() => res.status(200).send('OK'))
//   .catch(err => res.status(400).send(err))
// };

/**
 * Update/Save a Sheet
 */
exports.update = function(req, res) {
  Sheet.findByIdAndUpdate(req.params.id, { 
    content: req.body, 
    $push: {"history": {columnHeaders: req.body.columnHeaders, grid: req.body.grid }}
  }, {new: true})
  .then((sheet) => res.status(200).json(sheet))
  .catch((err) => {
    console.log(err)
    res.status(500).send('We failed to save to due some reason')
  })
};

exports.updateName = function(req, res) {
  Sheet.findByIdAndUpdate(req.params.sheetId, req.body )
  .then(() => res.sendStatus(200))
  .catch(() => res.sendStatus(500));
}

/**
 * Remove a Sheet
 */
exports.remove = function(req, res) {
  var query = { id: req.params.id };
  Sheet.findOneAndRemove(query)
  .then(data => res.status(200).send('Removed Successfully'))
  .catch(err => console.log('Error on delete'))
};
