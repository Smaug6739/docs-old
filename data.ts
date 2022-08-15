// SUBJECT => THEME => CHAPTER

export interface Config {
  [key: string]: Subject;
}
interface ThemeObject {
  [key: string]: Theme;
}
export interface Subject {
  name: string;
  url: string;
  data: ThemeObject;
}
export interface Theme {
  name: string;
  icon: string;
  chapters: Chapter[];
}

export interface Chapter {
  name: string;
  path: string;
}
const config: Config = {
  maths: {
    name: "Mathématiques",
    url: "/maths",
    data: {
      general: {
        name: "General",
        icon: "bx-math",
        chapters: [],
      },
      algebres: {
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
      analyse: {
        name: "Analyse",
        icon: "bx-analyse",
        chapters: [],
      },
      geometrie: {
        name: "Géométrie",
        icon: "bxs-shapes",
        chapters: [],
      },
      probabilitesEtStatistiques: {
        name: "Probabilités et statistiques",
        icon: "bx-pie-chart-alt-2",
        chapters: [],
      },
      algorithmique: {
        name: "Algorithme",
        icon: "bx-code-alt",
        chapters: [],
      },
    },
  },
  physics: {
    name: "Physique",
    url: "/physics",
    data: {
      general: {
        name: "Général",
        icon: "bx-atom",
        chapters: [],
      },
      electricity: {
        name: "Éléctricité",
        icon: "bx-candles",
        chapters: [],
      },
    },
  },
};

export default config;
