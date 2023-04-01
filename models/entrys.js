const mongoose = require('mongoose')

const entrySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: true
  },
  isExpense: {
    type: Number,
    required: true
  },
  frequence: {
    type: Number,
    required: true
  },
  isReocuring:{
      type: Boolean,
      required: true
  }
})

entrySchema.set('toJSON', {
  transform: (document, returned) => {
    returned.id = returned._id.toString(),
    delete returned._id
    delete returned.__v
  }
})

module.exports = mongoose.model('entry', entrySchema)