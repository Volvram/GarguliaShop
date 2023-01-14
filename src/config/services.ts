export type ServicesType = {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
};

export const SERVICES: ServicesType[] = [
  {
    id: "saveAllLoot",
    title: "Сопровождение",
    description: "Включает в себя файты и радку, плюс сейв всего лута с типов",
    price: 125,
    currency: "rub",
  },
  {
    id: "fightsAndRad",
    title: "Сопровождение",
    description:
      "Включает в себя файты и радку, что сможешь взять, то и унесёшь",
    price: 90,
    currency: "rub",
  },
  {
    id: "fights",
    title: "Сопровождение",
    description: "Включает в себя файты",
    price: 80,
    currency: "rub",
  },
  {
    id: "rad",
    title: "Сопровождение",
    description: "Включает в себя радку",
    price: 80,
    currency: "rub",
  },
];
