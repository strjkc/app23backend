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

exports.isCurrentMonth = isCurrentMonth;