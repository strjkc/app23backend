const Saving = require("./models/saving");

const isCurrentMonth = (entry) => {
  
    //proveriti da l je janual br 1 ili 0
    const entryStartMonth = new Date(entry.startDate).getMonth() -1;
    const entryStartYear = new Date(entry.startDate).getFullYear();
    const entryEndMonth = new Date(entry.endDate).getMonth() -1;
    const entryEndYear = new Date(entry.endDate).getFullYear();
  
    //get current date
  
    //januar je 0 ovde
    const currMonth = new Date().getMonth();
    const currYear = new Date().getFullYear();
  
    if(currYear > entryStartYear && currYear < entryEndYear){
        return true;
    }
    else if(entryStartYear === currYear || entryEndYear === currYear){
        if(currMonth >= entryStartMonth && currMonth <= entryEndMonth)
            return true;
        else
            return false;
    }else{
        return false;
    }  
};

const getAvailableAmount = (allEntries) => {
    //filter out all instances of incomes, subtract all instances of expenses
    return allEntries.filter(expense => Boolean(!expense.isExpense)).reduce((a,b) => a+b.amount, 0) -  
    allEntries.filter(expense => Boolean(expense.isExpense)).reduce((a,b) => a+b.amount, 0);  
};
  

const calculateSavings = async (entry, allEntries) => {
    console.log("Controler/Entrys: CalculateSavings is called");
    
    //apply to savings calc if needed
    if (isCurrentMonth(entry)){
        const savings = await Saving.findOne();
        const availableAmount = getAvailableAmount(allEntries);
        const newSavings = {percentToSave: savings.percentToSave, totalSaved: savings.totalSaved, currentSaving: availableAmount * savings.percentToSave};
        const savedObject = await Saving.findOneAndUpdate({}, newSavings, {new: true});
        return savedObject;
    }
};

module.exports = {isCurrentMonth, calculateSavings, getAvailableAmount};