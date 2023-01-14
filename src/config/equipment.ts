import classic from "@assets/img/classic.jpg";
import dancingFarmer from "@assets/img/dancingFarmer.jpg";
import facingKing from "@assets/img/facingKing.jpg";
import fastest from "@assets/img/fastest.jpg";
import fastTravel from "@assets/img/fastTravel.jpg";
import light from "@assets/img/light.jpg";
import localKiller from "@assets/img/localKiller.jpg";
import lotOfSpace from "@assets/img/lotOfSpace.jpg";
import noImage from "@assets/img/noImage.jpg";
import recoilKing from "@assets/img/recoilKing.jpg";
import stockWithoutMk from "@assets/img/stockWithoutMk.jpg";
import stockWithRad from "@assets/img/stockWithRad.jpg";
import tank from "@assets/img/tank.jpg";
import thug from "@assets/img/thug.jpg";
import voroshilovSharpshooter from "@assets/img/voroshilovSharpshooter.jpg";

export type EquipmentType = {
  id: string;
  title: string;
  image: string;
  description: string;
  maxPrice: number | null;
  minPrice: number;
  currency: string;
  type: string;
};

export const EQUIPMENT: EquipmentType[] = [
  {
    id: "localKiller",
    title: "Убийца локалки",
    image: localKiller,
    description: "В 6 броне стальной фронт 3 нейлоновых ремня высшего качества",
    maxPrice: null,
    minPrice: 175,
    currency: "rub",
    type: "set",
  },
  {
    id: "facingKing",
    title: "Король выкладки",
    image: facingKing,
    description: "В 6 броне стальной фронт 3 освинцованные ткани",
    maxPrice: null,
    minPrice: 400,
    currency: "rub",
    type: "set",
  },
  {
    id: "thug",
    title: "Головорез",
    image: thug,
    description: "В 6 броне стальной фронт 1 пластина и 2 фабриолита",
    maxPrice: null,
    minPrice: 188,
    currency: "rub",
    type: "set",
  },
  {
    id: "recoilKing",
    title: "Король отдачи",
    image: recoilKing,
    description:
      "В 6 броне стальной фронт 1 освинцованная ткань и 2 фабриолита",
    maxPrice: null,
    minPrice: 175,
    currency: "rub",
    type: "set",
  },
  {
    id: "classic",
    title: "Классика",
    image: classic,
    description: "В классической 6 броне 1 освинцованная ткань",
    maxPrice: null,
    minPrice: 63,
    currency: "rub",
    type: "set",
  },
  {
    id: "light",
    title: "Налегке",
    image: light,
    description: "-",
    maxPrice: null,
    minPrice: 63,
    currency: "rub",
    type: "set",
  },
  {
    id: "fastest",
    title: "Быстрее всех",
    image: fastest,
    description: "-",
    maxPrice: null,
    minPrice: 50,
    currency: "rub",
    type: "set",
  },
  {
    id: "tank",
    title: "Танк",
    image: tank,
    description: "-",
    maxPrice: null,
    minPrice: 125,
    currency: "rub",
    type: "set",
  },
  {
    id: "fastTravel",
    title: "Быстрое передвижение",
    image: fastTravel,
    description: "-",
    maxPrice: null,
    minPrice: 75,
    currency: "rub",
    type: "set",
  },
  {
    id: "dancingFarmer",
    title: "Танцующий фармила",
    image: dancingFarmer,
    description: "-",
    maxPrice: null,
    minPrice: 143,
    currency: "rub",
    type: "set",
  },
  {
    id: "lotOfSpace",
    title: "Много места",
    image: lotOfSpace,
    description: "-",
    maxPrice: null,
    minPrice: 25,
    currency: "rub",
    type: "set",
  },
  {
    id: "voroshilovSharpshooter",
    title: "Ворошиловский стрелок",
    image: voroshilovSharpshooter,
    description: "-",
    maxPrice: null,
    minPrice: 38,
    currency: "rub",
    type: "set",
  },
  {
    id: "stockWithoutMk",
    title: "Сток без мк",
    image: stockWithoutMk,
    description: "-",
    maxPrice: null,
    minPrice: 50,
    currency: "rub",
    type: "set",
  },
  {
    id: "stockWithRad",
    title: "Сток с радкой",
    image: stockWithRad,
    description: "-",
    maxPrice: null,
    minPrice: 48,
    currency: "rub",
    type: "set",
  },
  {
    id: "weapon",
    title: "Оружие",
    image: noImage,
    description:
      "Оружие кобра и стальной фронт, которого нет в каталоге, кроме AWM, AMR и Mk14",
    maxPrice: 35,
    minPrice: 25,
    currency: "rub",
    type: "gun",
  },
];
