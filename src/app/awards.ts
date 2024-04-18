import { iAward } from "./iAward";

export const awards: iAward[]=[ 
    {
        name: 'Best Portrait', 
        institution: 'International Photography Award',
        description: 'Winner of the prestigious International Photography Award for Best Portrait Series', 
        year: 2018,
        image: 'award.svg',
    },
    {
        name: 'Excellence in Landscape Photography', 
        institution: 'Golden Lens Award',
        description: 'Recipient of the Golden Lens Award for Excellence in Landscape Photography', 
        image: 'award.svg',
        year: 2020,
    },{
        name: 'Photographer of the Year', 
        institution: 'Vogue Paris',
        description: 'Named "Photographer of the Year" by Vogue Paris', 
        image: 'award.svg',
        year: 2022,
    }
]