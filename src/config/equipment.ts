import facingKing from "@assets/img/facingKing.jpg";
import localKiller from "@assets/img/localKiller.jpg";
import recoilKing from "@assets/img/recoilKing.jpg";
import thug from "@assets/img/thug.jpg";

export type EquipmentType = {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  currency: string;
  type: string;
};

export const EQUIPMENT: EquipmentType[] = [
  {
    id: "localKiller",
    title: "Убийца локалки",
    image: localKiller,
    description: "В 6 броне стальной фронт 3 нейлоновых ремня высшего качества",
    price: 350,
    currency: "rub",
    type: "set",
  },
  {
    id: "facingKing",
    title: "Король выкладки",
    image: facingKing,
    description: "В 6 броне стальной фронт 3 освинцованные ткани",
    price: 350,
    currency: "rub",
    type: "set",
  },
  {
    id: "thug",
    title: "Головорез",
    image: thug,
    description: "В 6 броне стальной фронт 1 пластина и 2 фабриолита",
    price: 350,
    currency: "rub",
    type: "set",
  },
  {
    id: "recoilKing",
    title: "Король отдачи",
    image: recoilKing,
    description:
      "В 6 броне стальной фронт 1 освинцованная ткань и 2 фабриолита",
    price: 350,
    currency: "rub",
    type: "set",
  },
];
