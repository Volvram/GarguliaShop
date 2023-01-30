export type SectionsType = {
  id: string;
  name: string;
  path: string;
};

export const SECTIONS: SectionsType[] = [
  {
    id: "Loot",
    name: "Лут",
    path: "/",
  },
  {
    id: "Services",
    name: "Услуги",
    path: "/services",
  },
  {
    id: "Announcements",
    name: "Объявления",
    path: "/announcements",
  },
];
