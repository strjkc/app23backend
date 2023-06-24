const entryRouter = require('express').Router()
const Entry = require('../models/entrys')
const Saving = require('../models/saving')



/*
  svaka putanja koja menja unos, proveriti da l menjamo/dodajemo unos za tekuci mesec, ako jeste rekalkulisi stednju za tekuci mesec, ako nije onda nista.
*/


const calculateSavings = async (entry) => {
  console.log("Controler/Entrys: CalculateSavings is called")
  
  //apply to savings calc if needed
  if (isCurrentMonth(entry)){
    console.log("Recalculating savings")
    const savings = await Saving.findOne()
    console.log("The saving object ", savings)
    const availableAmount = await getAvailableAmount()
    const newSavings = {percentToSave: savings.percentToSave, totalSaved: savings.totalSaved, currentSaving: availableAmount * savings.percentToSave}
    console.log("New savings: ", newSavings)
    const savedObject = await Saving.findOneAndUpdate({}, newSavings, {new: true})
    return savedObject
  }


}

const getAvailableAmount = async () => {
  const entries = await Entry.find({})

  const listOfExpenses = entries.filter(expense => Boolean(expense.isExpense))
  const listOfIncomes = entries.filter(expense => Boolean(!expense.isExpense))
  
  const sumOfExpenses = listOfExpenses.reduce((a,b) => a+b.amount, 0)
  const sumOfIncomes =  listOfIncomes.reduce((a,b) => a+b.amount, 0)
  console.log("Available amount: ", sumOfIncomes - sumOfExpenses)
  return available = sumOfIncomes - sumOfExpenses

}

  //!!!!!  format datuma utice na ovu funkciju   !!!!!!!!!!!!
const isCurrentMonth = (entry) => {
  
  //proveriti da l je janual br 1 ili 0
  const entryStartMonth = new Date(entry.startDate).getMonth() -1
  const entryStartYear = new Date(entry.startDate).getFullYear()
  const entryEndMonth = new Date(entry.endDate).getMonth() -1
  const entryEndYear = new Date(entry.endDate).getFullYear()

  //get current date

  //januar je 0 ovde
  const currMonth = new Date().getMonth()
  const currYear = new Date().getFullYear()

  //ckeck if the entry should be applied for the current month
  return (currYear >= entryStartYear && currYear <= entryEndYear) && (currMonth >= entryStartMonth && currMonth <= entryEndMonth) ? true : false

}

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
    await calculateSavings(savedentry)
    response.status(201).json(savedentry)
})

entryRouter.delete('/:id', async (request, response) => {
  const entryId = request.params.id
  const entryToRemove = await Entry.findByIdAndRemove(entryId)
  await calculateSavings(entryToRemove)
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
  await calculateSavings(updatedentry)
  console.log("updated entry", updatedentry)
  response.status(201).send(updatedentry)
})

module.exports = entryRouter