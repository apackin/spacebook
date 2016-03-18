/**
 * Schema Definitions
 *
 */
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  sheets: [String],
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

// Compiles the schema into a model, opening (or creating, if
//	nonexistent) the 'Topic' collection in the MongoDB database
Workspace = mongoose.model('Workspace', schema);
