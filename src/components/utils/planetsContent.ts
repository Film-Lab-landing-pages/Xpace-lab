import { colors } from "../../styles/variables";
import content from "./contentDescription";

export const planets = [
  {
    order: 0,
    imageSrc: "./logo-nca.png",
    planetColor: colors.red,
    hoverTitle: "NCA",
    hoverContent: content.NCA,
  },
  {
    order: 1,
    imageSrc: "./logo-fora-da-caixa.png",
    planetColor: colors.yellow,
    hoverTitle: "Facil",
    hoverContent: content.ForaDaCaixa,
  },
  {
    order: 2,
    imageSrc: "./logo-digi4all.png",
    planetColor: colors.pink,
    hoverTitle: "Digi4All",
    hoverContent: content.Digi4All,
  },
  {
    order: 3,
    imageSrc: "./logo-film-lab.png",
    planetColor: colors.blue,
    hoverTitle: "Film Lab",
    hoverContent: content.FilmLab,
  },
  {
    order: 4,
    imageSrc: "./logo-facil.png",
    planetColor: colors.yellow,
    hoverTitle: "Facil",
    hoverContent: content.FACIL,
  },
];
