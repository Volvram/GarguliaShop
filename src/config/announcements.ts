export type AnnouncemetsType = {
  id: string;
  name: string;
  description: string;
};

export const ANNOUNCEMENTS: AnnouncemetsType[] = [
  {
    id: "setBulkPurchase",
    name: "Оптовая покупка сетов",
    description: "При покупке 10 сетов 1 сет в подарок!",
  },
  {
    id: "inventoryBulkPurchase",
    name: "Оптовая покупка инвентаря",
    description:
      "Скупайте весь инвентарь владельца магазина всего за 1000 рублей!",
  },
  {
    id: "lootBoxBulkPurchase",
    name: "Оптовая покупка лутбоксов",
    description: `При покупке 3 любых лутбоксов - 1 простой в подарок!
При покупке 6 лутбоксов - 1 простой и 1 редкий в подарок!
При покупке 10 лутбоксов - 1 простой, 1 редкий и 1 эпический в подарок!`,
  },
  {
    id: "advertisement",
    name: "Реклама",
    description: `За рекламу нашего магазина на сторонних сервисах  с проходимостью не меньше,
чем аудитория нашего телеграм канала, 2 редких лутбокса в подарок!
(Обязательное предоставление доказательств)`,
  },
];
