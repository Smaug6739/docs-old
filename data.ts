// SUBJECT => THEME => CHAPTER

export interface Subject {
    name: string
    url: string
    themes: Theme[]
}
export interface Theme {
    name: string
    icon: string
    chapters: Chapter[]
}

export interface Chapter {
    name: string
    path: string
}
const config: Subject[] = [
    {
        name: "Mathématiques",
        url: "/maths",
        themes: [
            {
                name: "General",
                icon: "bx-math",
                chapters: [
                    {
                        name: "Symboles",
                        path: "maths/general/symbols",
                    },
                ],
            },
            {
                name: "Nombres",
                icon: "bx-trim",
                chapters: [
                    {
                        name: "Ensembles",
                        path: "maths/numbers/sets",
                    },
                    {
                        name: "Intervalles",
                        path: "maths/numbers/intervals",
                    },
                ],
            },
            {
                name: "Algèbres",
                icon: "bx-infinite",
                chapters: [
                    {
                        name: "Nombres complexes",
                        path: "maths/algebres/nombres_complexes",
                    },
                    {
                        name: "Trigonométrie",
                        path: "maths/algebres/trigonometrie",
                    },
                ],
            },
            {
                name: "Analyse",
                icon: "bx-analyse",
                chapters: [],
            },
            {
                name: "Géométrie",
                icon: "bxs-shapes",
                chapters: [],
            },
            {
                name: "Probabilités et statistiques",
                icon: "bx-pie-chart-alt-2",
                chapters: [],
            },
            {
                name: "Algorithme",
                icon: "bx-code-alt",
                chapters: [],
            },
        ],
    },
    {
        name: "Physique",
        url: "/physics",
        themes: [
            {
                name: "Général",
                icon: "bx-atom",
                chapters: [],
            },
            {
                name: "Éléctricité",
                icon: "bx-candles",
                chapters: [],
            },
        ],
    },
]

export default config
