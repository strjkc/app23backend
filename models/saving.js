const mongoose = require('mongoose')

const savingSchema = mongoose.Schema({
  currentSaving: {
    type: Number,
    required: true
  },
  totalSaved: {
    type: String,
    required: true
  },
  percentToSave: {
    type: String,
    required: true
  }
})

savingSchema.set('toJSON', {
  transform: (document, returned) => {
    returned.id = returned._id.toString(),
    delete returned._id
    delete returned.__v
  }
})

module.exports = mongoose.model('entry', savingSchema)