
//startna godina je manja end goidna je veca:
//    startni mesec je manji, end mesec je manji - treba da radi
const entry1 = {
    name: "Plata",
    amount: 185000,
    startDate: "2021-05",
    endDate: "2025-01",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
 

//    startni mesec je manji, end mesec veci - treba da radi
const entry2 = {
    name: "Plata",
    amount: 185000,
    startDate: "2021-05",
    endDate: "2025-12",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je manji, end mesec je isti - treba da radi
const entry3 = {
    name: "Plata",
    amount: 185000,
    startDate: "2021-05",
    endDate: "2025-07",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je isti, end mesec je isti - treba da radi
const entry4 = {
    name: "Plata",
    amount: 185000,
    startDate: "2021-07",
    endDate: "2025-07",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je isti, end mesec je manji -- treba da radi
const entry5 = {
    name: "Plata",
    amount: 185000,
    startDate: "2021-07",
    endDate: "2025-01",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je isti, end mesec je veci - treba da radi
const entry6 = {
    name: "Plata",
    amount: 185000,
    startDate: "2021-07",
    endDate: "2025-12",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startmi mesec je veci, end mesec je isti - treba da radi
const entry7 = {
    name: "Plata",
    amount: 185000,
    startDate: "2021-12",
    endDate: "2025-07",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je veci, end mesec je veci - treba da radi
const entry8 = {
    name: "Plata",
    amount: 185000,
    startDate: "2021-11",
    endDate: "2025-12",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je veci, end mesec je manji - treba da radi
const entry9 = {
    name: "Plata",
    amount: 185000,
    startDate: "2021-12",
    endDate: "2025-01",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//
//
//startna godina je ista end goidna je ista:
//    startni mesec je manji, end mesec je manji - false
const entry11 = {
    name: "Plata",
    amount: 185000,
    startDate: "2023-05",
    endDate: "2023-01",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je manji, end mesec veci - treba da radi
const entry12 = {
    name: "Plata",
    amount: 185000,
    startDate: "2023-05",
    endDate: "2023-12",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je manji, end mesec je isti - treba da radi
const entry13 = {
    name: "Plata",
    amount: 185000,
    startDate: "2023-05",
    endDate: "2023-07",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je isti, end mesec je isti - treba da radi
const entry14 = {
    name: "Plata",
    amount: 185000,
    startDate: "2023-07",
    endDate: "2023-07",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je isti, end mesec je manji - false ----- ovo ne bi smeo da bude validan unos
const entry15 = {
    name: "Plata",
    amount: 185000,
    startDate: "2023-07",
    endDate: "2023-01",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je isti, end mesec je veci - treba da radi
const entry16 = {
    name: "Plata",
    amount: 185000,
    startDate: "2023-07",
    endDate: "2023-12",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startmi mesec je veci, end mesec je isti - nije validan unos 
const entry17 = {
    name: "Plata",
    amount: 185000,
    startDate: "2023-12",
    endDate: "2023-07",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je veci, end mesec je veci - false
const entry18 = {
    name: "Plata",
    amount: 185000,
    startDate: "2023-11",
    endDate: "2023-12",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je veci, end mesec je manji - nije validan unos
const entry19 = {
    name: "Plata",
    amount: 185000,
    startDate: "2023-12",
    endDate: "2023-01",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    
//    



//startna godina je manja end godina je manja  

const entry21 = {
    name: "Plata",
    amount: 185000,
    startDate: "2021-05",
    endDate: "2022-01",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je manji, end mesec veci - treba da radi
const entry22 = {
    name: "Plata",
    amount: 185000,
    startDate: "2021-05",
    endDate: "2022-12",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je manji, end mesec je isti - treba da radi
const entry23 = {
    name: "Plata",
    amount: 185000,
    startDate: "2021-05",
    endDate: "2022-07",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je isti, end mesec je isti - treba da radi
const entry24 = {
    name: "Plata",
    amount: 185000,
    startDate: "2021-07",
    endDate: "2022-07",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je isti, end mesec je manji - false ----- ovo ne bi smeo da bude validan unos
const entry25 = {
    name: "Plata",
    amount: 185000,
    startDate: "2021-07",
    endDate: "2022-01",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je isti, end mesec je veci - treba da radi
const entry26 = {
    name: "Plata",
    amount: 185000,
    startDate: "2021-07",
    endDate: "2022-12",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startmi mesec je veci, end mesec je isti - nije validan unos 
const entry27 = {
    name: "Plata",
    amount: 185000,
    startDate: "2021-12",
    endDate: "2022-07",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je veci, end mesec je veci - false
const entry28 = {
    name: "Plata",
    amount: 185000,
    startDate: "2021-11",
    endDate: "2022-12",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je veci, end mesec je manji - nije validan unos
const entry29 = {
    name: "Plata",
    amount: 185000,
    startDate: "2021-12",
    endDate: "2022-01",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 






//
//startna goidina je veca end godina je veca
//    startni mesec je manji, end mesec je manji - false
const entry31 = {
    name: "Plata",
    amount: 185000,
    startDate: "2025-05",
    endDate: "2026-01",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je manji, end mesec veci - treba da radi
const entry32 = {
    name: "Plata",
    amount: 185000,
    startDate: "2025-05",
    endDate: "2026-12",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je manji, end mesec je isti - treba da radi
const entry33 = {
    name: "Plata",
    amount: 185000,
    startDate: "2025-05",
    endDate: "2026-07",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je isti, end mesec je isti - treba da radi
const entry34 = {
    name: "Plata",
    amount: 185000,
    startDate: "2024-07",
    endDate: "2026-07",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je isti, end mesec je manji - false ----- ovo ne bi smeo da bude validan unos
const entry35 = {
    name: "Plata",
    amount: 185000,
    startDate: "2025-07",
    endDate: "2026-01",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je isti, end mesec je veci - treba da radi
const entry36 = {
    name: "Plata",
    amount: 185000,
    startDate: "2025-07",
    endDate: "2026-12",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startmi mesec je veci, end mesec je isti - nije validan unos 
const entry37 = {
    name: "Plata",
    amount: 185000,
    startDate: "2025-12",
    endDate: "2026-07",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je veci, end mesec je veci - false
const entry38 = {
    name: "Plata",
    amount: 185000,
    startDate: "2025-11",
    endDate: "2026-12",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 
//    startni mesec je veci, end mesec je manji - nije validan unos
const entry39 = {
    name: "Plata",
    amount: 185000,
    startDate: "2025-12",
    endDate: "2026-01",
    isExpense: 0,
    frequence: 0,
    isReocuring: true
}; 

const entries = {
    dateIsInYrange: [entry1, entry2, entry3, entry4, entry5, entry6, entry7, entry8, entry9],
    dateIsEqualToY: [entry11, entry12, entry13, entry14, entry15, entry16, entry17, entry18, entry19],
    dateIsGreaterThanYs:[entry21, entry22, entry23, entry24, entry25, entry26, entry27, entry28, entry29],
    dateIsSmallerThanYs:[entry31, entry32, entry33, entry34, entry35, entry36, entry37, entry38, entry39]
};

const allEntries = { 
    moreExpThanInc: [
        {
            name: "Plata",
            amount: 10,
            startDate: "2021-05",
            endDate: "2025-01",
            isExpense: 1,
            frequence: 0,
            isReocuring: true
        },
        {
            name: "Plata",
            amount: 10,
            startDate: "2021-05",
            endDate: "2025-12",
            isExpense: 1,
            frequence: 0,
            isReocuring: true
        },
        {
            name: "Plata",
            amount: 10,
            startDate: "2021-05",
            endDate: "2025-07",
            isExpense: 1,
            frequence: 0,
            isReocuring: true
        },
        {
            name: "Plata",
            amount: 10,
            startDate: "2021-07",
            endDate: "2025-07",
            isExpense: 1,
            frequence: 0,
            isReocuring: true
        },
        {
            name: "Plata",
            amount: 10,
            startDate: "2021-07",
            endDate: "2025-01",
            isExpense: 1,
            frequence: 0,
            isReocuring: true
        },
        {
            name: "Plata",
            amount: 10,
            startDate: "2021-07",
            endDate: "2025-12",
            isExpense: 1,
            frequence: 0,
            isReocuring: true
        },
        {
            name: "Plata",
            amount: 10,
            startDate: "2021-12",
            endDate: "2025-07",
            isExpense: 0,
            frequence: 0,
            isReocuring: true
        },
        {
            name: "Plata",
            amount: 10,
            startDate: "2021-11",
            endDate: "2025-12",
            isExpense: 0,
            frequence: 0,
            isReocuring: true
        },
        {
            name: "Plata",
            amount: 10,
            startDate: "2021-12",
            endDate: "2025-01",
            isExpense: 0,
            frequence: 0,
            isReocuring: true
        }],
    moreIncThanExp: [
    {
        name: "Plata",
        amount: 10,
        startDate: "2021-05",
        endDate: "2025-01",
        isExpense: 1,
        frequence: 0,
        isReocuring: true
    },  
    {
        name: "Plata",
        amount: 10,
        startDate: "2021-05",
        endDate: "2025-12",
        isExpense: 1,
        frequence: 0,
        isReocuring: true
    },
    {
        name: "Plata",
        amount: 10,
        startDate: "2021-05",
        endDate: "2025-07",
        isExpense: 1,
        frequence: 0,
        isReocuring: true
    },
    {
        name: "Plata",
        amount: 10,
        startDate: "2021-07",
        endDate: "2025-07",
        isExpense: 1,
        frequence: 0,
        isReocuring: true
    },
    {
        name: "Plata",
        amount: 10,
        startDate: "2021-07",
        endDate: "2025-01",
        isExpense: 0,
        frequence: 0,
        isReocuring: true
    },
    {
        name: "Plata",
        amount: 10,
        startDate: "2021-07",
        endDate: "2025-12",
        isExpense: 0,
        frequence: 0,
        isReocuring: true
    },
    {
        name: "Plata",
        amount: 10,
        startDate: "2021-12",
        endDate: "2025-07",
        isExpense: 0,
        frequence: 0,
        isReocuring: true
    },
    {
        name: "Plata",
        amount: 10,
        startDate: "2021-11",
        endDate: "2025-12",
        isExpense: 0,
        frequence: 0,
        isReocuring: true
    },
    {
        name: "Plata",
        amount: 10,
        startDate: "2021-12",
        endDate: "2025-01",
        isExpense: 0,
        frequence: 0,
        isReocuring: true
        }],
    expEqInc: [
    {
        name: "Plata",
        amount: 10,
        startDate: "2021-05",
        endDate: "2025-01",
        isExpense: 1,
        frequence: 0,
        isReocuring: true
    },
    {
        name: "Plata",
        amount: 10,
        startDate: "2021-05",
        endDate: "2025-12",
        isExpense: 1,
        frequence: 0,
        isReocuring: true
    },
    {
        name: "Plata",
        amount: 10,
        startDate: "2021-05",
        endDate: "2025-07",
        isExpense: 1,
        frequence: 0,
        isReocuring: true
    },
    {
        name: "Plata",
        amount: 10,
        startDate: "2021-07",
        endDate: "2025-07",
        isExpense: 1,
        frequence: 0,
        isReocuring: true
    },
    {
        name: "Plata",
        amount: 10,
        startDate: "2021-07",
        endDate: "2025-01",
        isExpense: 1,
        frequence: 0,
        isReocuring: true
    },
    {
        name: "Plata",
        amount: 10,
        startDate: "2021-07",
        endDate: "2025-12",
        isExpense: 0,
        frequence: 0,
        isReocuring: true
    },
    {
        name: "Plata",
        amount: 10,
        startDate: "2021-12",
        endDate: "2025-07",
        isExpense: 0,
        frequence: 0,
        isReocuring: true
    },
    {
        name: "Plata",
        amount: 10,
        startDate: "2021-11",
        endDate: "2025-12",
        isExpense: 0,
        frequence: 0,
        isReocuring: true
    },
    {
        name: "Plata",
        amount: 10,
        startDate: "2021-12",
        endDate: "2025-01",
        isExpense: 0,
        frequence: 0,
        isReocuring: true
    },
    {
        name: "Plata",
        amount: 10,
        startDate: "2021-12",
        endDate: "2025-01",
        isExpense: 0,
        frequence: 0,
        isReocuring: true
    }
    ]
};


module.exports = {entries, allEntries};