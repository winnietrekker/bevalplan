const other_data = [
  {
    title: { 
            id: "name", 
            label: "Geboorteplan van",
            position: {x: 100, y: 10},
        },
    values: [
        { 
            id: "name_parents", 
            label: "Naam ouders", 
            value: "Martine en Jef",
            position: {x: 150, y: 10},
            hidden: false,
        },
        { 
            id: "name_child", 
            label: "Naam kind", 
            value: "Oscar",
            position: {x: 170, y: 10},
            hidden: false,
        },
        { 
            id: "name_doula", 
            label: "Naam doula/verloskundige/vroedvrouw", 
            value: "Sofie",
            position: {x: 190, y: 10},
            hidden: false,
        },
      ],
  },
  {
    title: { 
            id: "most_important", 
            label: "Dit is voor mij het belangrijkste",
            position: {x: 100, y: 30},
        },
    values: [
        { 
            id: "most_important", 
            label: "Dit is voor mij het belangrijkste",
            value: "Ik wil graag natuurlijk bevallen. Geen ingrepen als dat niet strikt medisch noodzakelijk is.",
            position: {x: 100, y: 40},
            hidden: false,
        },
      ]
  }
]

export default other_data;
