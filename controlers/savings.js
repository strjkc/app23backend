const SavingRouter = require('express').Router()
const Saving = require('../models/saving')
const Entries = require('../models/entrys')


/*
    treba mi cron job koji se pokrece svakog prvog u mesecu i dodaje stednju za trenutni mesec na totalnu sumu ustedjenih sredstava
*/

SavingRouter.get('/', async (request, response) => {
  let savings = await Saving.find({})
  
  if (savings.length < 1){
    savings = await postDefaultSaving()
  }
  response.json(savings)
    
})

const postDefaultSaving = async () => {
    const defaultSaving = {
        currentSaving: 0,
        totalSaved: 0,
        percentToSave: 0.2
    }
    const newSaving = new Saving(defaultSaving)
    const savedSaving = await newSaving.save()
    return savedSaving
}


/*
ne treba jer imam samo jedan objekat
SavingRouter.get('/:id', async (request, response) => {
  const month = Number(request.params.id)
  const allEntries = await Saving.find({})
  const savings = allEntries.filter(Saving => {
    const savingstartDate = new Date(Saving.startDate).getMonth()
    const SavingEndDate = new Date(Saving.endDate).getMonth()
    return month >= savingstartDate && month <= SavingEndDate
  })
  response.json(savings)
    
})

*/

/* ne treba jer ce samo biti updatovan objekat
SavingRouter.post('/', async (request, response, next) => {
  console.log("POST request data:", request.body)
  const Saving = { ...request.body}
    const newSaving = new Saving(Saving)
    const savedSaving = await newSaving.save()
    response.status(201).json(savedSaving)
})

*/

/* ne treba jer ce samo biti updatovan objekat 
SavingRouter.delete('/:id', async (request, response) => {
  const SavingId = request.params.id
  await Saving.findByIdAndRemove(SavingId)
  response.status(204).end()
})

*/

SavingRouter.put('/', async (request, response) => {
    console.log("Savings put called")
    const saving = {...request.body}
    console.log("Received Saving: ",saving)
    const updatedSaving = await Saving.findOneAndUpdate({}, saving, {new: true})
    console.log("updated Saving", updatedSaving)
    response.status(201).send(updatedSaving)
})


/*
    kad uradim get, hocu da prikazem kolko cuvam od prihoda za ovaj mesec, kolko sam sacuvao do sada ne racunajuci tekuci mesec, i koji procenat prihoda ide u stednju.
    
    


*/

module.exports = SavingRouter