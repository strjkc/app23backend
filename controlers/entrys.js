const entryRouter = require('express').Router()
const Entry = require('../models/entrys')



entryRouter.get('/', async (request, response) => {
  const entrys = await Entry.find({})
  response.json(entrys)
    
})

entryRouter.get('/:id', async (request, response) => {
  const month = Number(request.params.id)
  const allEntries = await Entry.find({})
  const entrys = allEntries.filter(entry => {
    const entryStartDate = new Date(entry.startDate).getMonth()
    const entryEndDate = new Date(entry.endDate).getMonth()
    return month >= entryStartDate && month <= entryEndDate
  })
  response.json(entrys)
    
})

entryRouter.post('/', async (request, response, next) => {
  console.log("POST request data:", request.body)
  const entry = { ...request.body}
    const newentry = new Entry(entry)
    const savedentry = await newentry.save()
    response.status(201).json(savedentry)
})

entryRouter.delete('/:id', async (request, response) => {
  const entryId = request.params.id
  await Entry.findByIdAndRemove(entryId)
  response.status(204).end()
})

entryRouter.put('/:id', async (request, response) => {
  const entryId = request.params.id
  const entry = {...request.body}
  if (!entryId)
    return response.status(400).json({error: 'Malformed request'})
  const existingEntry = await Entry.findById(entryId)
  console.log("Received entry: ",entry)
  const updatedentry = await Entry.findByIdAndUpdate(entryId, entry)
  console.log("updated entry", updatedentry)
  response.status(201).send(updatedentry)
})

module.exports = entryRouter