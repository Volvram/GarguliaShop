import classic from "@assets/img/classic.jpg";
import dancingFarmer from "@assets/img/dancingFarmer.jpg";
import facingKing from "@assets/img/facingKing.jpg";
import fastest from "@assets/img/fastest.jpg";
import fastTravel from "@assets/img/fastTravel.jpg";
import light from "@assets/img/light.jpg";
import localKiller from "@assets/img/localKiller.jpg";
import lootBox from "@assets/img/lootBox.jpg";
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
    minPrice: 170,
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
    minPrice: 185,
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
    minPrice: 185,
    currency: "rub",
    type: "set",
  },
  {
    id: "classic",
    title: "Классика",
    image: classic,
    description: "В классической 6 броне 1 освинцованная ткань",
    maxPrice: null,
    minPrice: 74,
    currency: "rub",
    type: "set",
  },
  {
    id: "light",
    title: "Налегке",
    image: light,
    description: "-",
    maxPrice: null,
    minPrice: 74,
    currency: "rub",
    type: "set",
  },
  {
    id: "fastest",
    title: "Быстрее всех",
    image: fastest,
    description: "-",
    maxPrice: null,
    minPrice: 49,
    currency: "rub",
    type: "set",
  },
  {
    id: "tank",
    title: "Танк",
    image: tank,
    description: "-",
    maxPrice: null,
    minPrice: 122,
    currency: "rub",
    type: "set",
  },
  {
    id: "fastTravel",
    title: "Быстрое передвижение",
    image: fastTravel,
    description: "-",
    maxPrice: null,
    minPrice: 62,
    currency: "rub",
    type: "set",
  },
  {
    id: "dancingFarmer",
    title: "Танцующий фармила",
    image: dancingFarmer,
    description: "-",
    maxPrice: null,
    minPrice: 140,
    currency: "rub",
    type: "set",
  },
  {
    id: "lotOfSpace",
    title: "Много места",
    image: lotOfSpace,
    description: "-",
    maxPrice: null,
    minPrice: 23,
    currency: "rub",
    type: "set",
  },
  {
    id: "voroshilovSharpshooter",
    title: "Ворошиловский стрелок",
    image: voroshilovSharpshooter,
    description: "-",
    maxPrice: null,
    minPrice: 40,
    currency: "rub",
    type: "set",
  },
  {
    id: "stockWithoutMk",
    title: "Сток без мк",
    image: stockWithoutMk,
    description: "-",
    maxPrice: null,
    minPrice: 49,
    currency: "rub",
    type: "set",
  },
  {
    id: "stockWithRad",
    title: "Сток с радкой",
    image: stockWithRad,
    description: "-",
    maxPrice: null,
    minPrice: 47,
    currency: "rub",
    type: "set",
  },
  {
    id: "weapon",
    title: "Оружие",
    image: noImage,
    description:
      "Оружие кобра и стальной фронт, которого нет в каталоге, кроме AWM, AMR и Mk14",
    maxPrice: 34,
    minPrice: 25,
    currency: "rub",
    type: "set",
  },
  {
    id: "commonLootBox",
    title: "Лутбокс обычный",
    image: lootBox,
    description:
      "Входят броня или шлем 3-5 лвл, оружие улучшенное или целое. Делается 2 прокрута на броню и оружие",
    maxPrice: null,
    minPrice: 20,
    currency: "rub",
    type: "lootBox",
  },
  {
    id: "upgradedLootBox",
    title: "Лутбокс улучшенный",
    image: lootBox,
    description:
      "Входят броня или шлем 4-6 лвл, оружие улучшенное или высшее. Делается 2 прокрута на броню и оружие",
    maxPrice: null,
    minPrice: 60,
    currency: "rub",
    type: "lootBox",
  },
  {
    id: "epicLootBox",
    title: "Лутбокс эпический",
    image: lootBox,
    description:
      "Входят броня и шлем 6 лвл, в том числе стальной фронт и кобра. Делается 2 прокрута на броню и шлем",
    maxPrice: null,
    minPrice: 80,
    currency: "rub",
    type: "lootBox",
  },
  {
    id: "mythicLootBox",
    title: "Лутбокс мифический",
    image: lootBox,
    description:
      "Входят броня и шлем 6 лвл стальной фронт и кобра (без обыкновенного). Делается 2 прокрута на броню и шлем",
    maxPrice: null,
    minPrice: 100,
    currency: "rub",
    type: "lootBox",
  },
  {
    id: "legendaryLootBox",
    title: "Лутбокс легенды",
    image: lootBox,
    description:
      "Гарантированная высшая мк 14. Входят броня и шлем 6 лвл, в том числе СТ, КБ, золотая, золотая СТ, золотая КБ. Делается 2 прокрута на броню и шлем",
    maxPrice: null,
    minPrice: 165,
    currency: "rub",
    type: "lootBox",
  },
];
