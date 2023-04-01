const totalsRouter = require('express').Router()
const Entry = require('../models/entrys')


totalsRouter.get('/', async (req, resp) =>{
    console.log("Getting totals for 12 months")
    let listOfTotals = []
    for(let i = 0; i < 12; i++){
        const totals = await calculateTotals(i)
        listOfTotals = listOfTotals.concat(totals)    
    }
    console.log("totals:", listOfTotals)
    resp.json(listOfTotals)
})

totalsRouter.get(('/:id'), async (req, resp) => {
    console.log("Calling route with id")
    const month = Number(req.params.id)
    const totals = await calculateTotals(month)
    resp.json(totals)
})


const calculateTotals = async (month) =>{
    const monthToCalculateFor = month
    const entries = await Entry.find({})
    //console.log("All entries", entries)
    let entriesForCalculation = null
    if (monthToCalculateFor !== null){
        entriesForCalculation = entries.filter(entry => {
            const entryStartDate = new Date(entry.startDate).getMonth()
            const entryEndDate = new Date(entry.endDate).getMonth()
            console.log(`Month from id: ${monthToCalculateFor} start month of entry ${entryStartDate} end month of entry ${entryEndDate} id is between these two dates? ${monthToCalculateFor >= entryStartDate && monthToCalculateFor <= entryEndDate}`)
            return monthToCalculateFor >= entryStartDate && monthToCalculateFor <= entryEndDate
        })
    }else{
        entriesForCalculation = entries
    }
    console.log("Entries to calclulate for", entriesForCalculation)
    const newTotals = getTotals(entriesForCalculation, monthToCalculateFor)
    console.log("Calculated totals: ",newTotals)
    return newTotals
}

    /*
    _id
641ea8ed4f00013ee34c2c80
name:"Plata"
amount:180000
startDate:"2023-03-25"
endDate:"9999-12-31"
isExpense:0
frequence:0
isReocuring:true
__v
0
    */

const getTotals = (entries, month) => {
    let newTotals = {
        income: 0,
        expenses: 0,
        available: 0    
    }
    
    entries.forEach(entry => {
//        console.log("newTotals", newTotals)
//        console.log("Master Entry", entry)
        const now = new Date()
//       console.log("Current date", now)
//        console.log(`current year ${now.getFullYear()} current month ${now.getMonth()}`)
        const currentDate = {month:  month || new Date().getMonth(), year:  new Date().getFullYear()}
        console.log("Calculating for this month: ", currentDate)
        const endDateOfEntry ={month:  new Date(entry.endDate).getMonth(),year:  new Date(entry.endDate).getFullYear()}
        const startDateOfEntry = {month:  new Date(entry.startDate).getMonth(),year:  new Date(entry.startDate).getFullYear()}
//        console.log("Current date", currentDate)
//        console.log("End date of entry", endDateOfEntry)
//        console.log("Start date of entry", startDateOfEntry)
        if((currentDate.year <= endDateOfEntry.year && currentDate.year >= startDateOfEntry.year) && (currentDate.month <= endDateOfEntry.month && currentDate.month >= startDateOfEntry.month)){
            //ako je jednokratni unos onda mora da bude u ovom mesecu i godini
            if(!entry.isReocuring && (startDateOfEntry.year === endDateOfEntry.year && (currentDate.year === startDateOfEntry.year && currentDate.month === startDateOfEntry.month))){
                calculateAmounts(newTotals, entry)
            }
            //unos se racuna svakog meseca ili godine
            else{
                if(startDateOfEntry.month === currentDate.month){
                    calculateAmounts(newTotals, entry)
                }
                else if(entry.frequence === 0 ){
                    calculateAmounts(newTotals, entry)
                }
            }
        }else{
            console.log("datum unosa je istekao ili nije poceo")
        }
    })

    newTotals.available = newTotals.income - newTotals.expenses
    return newTotals

}

const calculateAmounts = (totals, entry) => {
    console.log("Entry: ", entry)
    if(entry.isExpense)
        totals.expenses += entry.amount
    else if(!entry.isExpense)
        totals.income += entry.amount
    console.log("Tottals", totals)
}


/*
                trosak: start 23.03.2023. istek 23.03.2025
                sada je 23.4.2021
                if (unos.getDatumIsteka().getYear() > currdate.getYear()){
                    run = true;
                }else if (unos.getDatumIsteka().getMonthValue() >= currdate.getMonthValue()) {
                    run = true;
                }
                        if (run) {
                            //ako je trosak jednokratan i datum za njega je trenutni mesec onda ga primeni
                            if (unos.getIsJednokratno() == 1) {
                                if (currdate.getYear() == unos.getDatumSledecePrimene().getYear() &&
                                        currdate.getMonth() == unos.getDatumSledecePrimene().getMonth()) {
                                    updateTotals(totals, unos);
                                }
                            } else {
                                //  proveravam da l je unos za ovaj datum za slucaj da npr nije mesecni nego godisnji,
                                //  ako je unos godisnji onda ce se obracunavati samo onog meseca koji je stavljen u datum
                                //  prve primene, zato nema potrebe proveravati da l je y ili m
                                if (currdate.getMonth() == unos.getDatumSledecePrimene().getMonth()) {
                                    updateTotals(totals, unos);
                                //  ako nije bas taj mesec koji je upisan u datum prve primene, onda pogledati da l je mesecni
                                //  ako jeste onda vidi je l mesecni
                                } else {
                                    if (unos.getUcestalost().equals("m")) {
                                        updateTotals(totals, unos);
                                    }
                                }



*/

module.exports = totalsRouter