export interface types {
    src:string ,
    title:string,
}


export interface experienceTypes {
    src:string,
    likely:boolean ,
    title:string,
    tour:string ,
    price:string ,
    titleBtn:string,
}

export const BottomLinks:types[] = [
    {
        src:"/assets/Bank.svg" ,
        title:"Bank"
    } , 
    {
        src:"/assets/Hotel.svg",
        title:"Hotel"
    } ,
    {
        src:"/assets/restaurant.svg" ,
        title:"Restaurant"
    } ,
    {
        src:"/assets/Bank.svg" ,
        title:"Bank"
    } ,
    {
        src:"/assets/Hospital.svg" ,
        title:"Hospital"
    } ,

]

export const destination:types[] = [ 
    {
        src:"/assets/Amun.svg",
        title:"Template of Amun"
    } ,
     {
        src:"/assets/Isis.svg" ,
        title:"Template of Isis"
     },
     {
        src:"/assets/Sphinx.svg" ,
        title:"Sphinx"
     },
     {
        src:"/assets/Isis.svg" ,
        title:"Template of Isis"
     },
     {
        src:"/assets/Sphinx.svg" ,
        title:"Sphinx"
     },
];



export const experiences:experienceTypes[] = [
    {
        src:"/assets/Dendera.svg",
        likely:false ,
        title:"Dendera Temple of Hathor Private Tour with Government-Licensed Guide",
        tour:"Bus Tour",
        price:"From $574 per adult(price varies by group size)" ,
        titleBtn : ""
        
    } ,

    {
        src:"/assets/Luxor.svg",
        likely:true ,
        title:"Luxor Temple  Private Tour with Government-Licensed Guide",
        tour:"Bus Tour",
        price:"From $574 per adult(price varies by group size)" , 
        titleBtn:"LIKELY TO SELL OUT",
    },
    {
        src:"/assets/Ramesses.svg",
        likely:true ,
        title:"Temple of Ramesses Private Tour with Government-Licensed Guide",
        tour:"Bus Tour",
        price:"From $574 per adult(price varies by group size)" ,
        titleBtn:"BEST SELLER"
    },
    
    {
        src:"/assets/Ramesses.svg",
        likely:true ,
        title:"Temple of Ramesses Private Tour with Government-Licensed Guide",
        tour:"Bus Tour",
        price:"From $574 per adult(price varies by group size)" ,
        titleBtn:"BEST SELLER"
    },
   
    {
        src:"/assets/Ramesses.svg",
        likely:true ,
        title:"Temple of Ramesses Private Tour with Government-Licensed Guide",
        tour:"Bus Tour",
        price:"From $574 per adult(price varies by group size)" ,
        titleBtn:"BEST SELLER"
    }
]