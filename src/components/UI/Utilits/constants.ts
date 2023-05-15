export interface types {
    src:string ,
    title:string,
}


export interface nearbestTypes {
    src:string ,
    title:string,
    link:string   
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
        title:"Museum"
    } , 
    {
        src:"/assets/Hotel.svg",
        title:"Hotel"
    } ,
    {
        src:"/assets/Restaurant.svg" ,
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


export const regestrationInfo:types[] = [
    {
        src:"/assets/Google.svg" , 
        title:"Gmail"
    },
    {
        src:"/assets/FacebookLogin.svg", 
        title:"Facebook"
    },
    {
        src:"/assets/Email.svg" , 
        title:"Email"
    },
]



export const shareTravelItems:types[] = [
    {
        src:"/assets/Camera.svg" ,
        title:"Post photo"
    },
    {
        src:"/assets/Video.svg" ,
        title:"Post video"
    },
    {
        src:"/assets/Pen.svg" ,
        title:"Write review"
    }
]

export const addInfo :types[] = [

    {
        src:"/assets/Plus.svg",
        title:"Add your current city",
    },

    {
        src:"/assets/Plus.svg",
        title:"Add a website",
    },
    {
        src:"/assets/Plus.svg",
        title:"Write about yourself",
    },
    
]


export const nearBest : nearbestTypes[] = [ 
    {
        src:"/assets/Best.svg",
        title:"Nearby",
        link:"nearby",
    } , 
    {
        src:"/assets/Best.svg",
        title:"6 Best Places to visit",
        link:"best-places"
    }
]



export const popularPlaces : types[] = [
    {
        src:"/assets/Vallyoftheking.svg",
        title:"1-Vally of the King"
    },
    {
        src:"/assets/Vally.svg",
        title:"2-Vally of the King"
    },
    {
        src:"/assets/TemplateOfLuxor.svg",
        title:"3-Temple of Luxor"
    },
    {
        src:"/assets/TemplateOfAmun.svg",
        title:"4-Temples of Amun"
    },
    {
        src:"/assets/TemplateOfRamsses.svg",
        title:"5-Temple of Ramsses"
    },
    {
        src:"/assets/TemplateOfIsis.svg",
        title:"6-Temple of Isis"
    },

]