export const formatCurrency = (price: number, format: string) => {
  const currencyFormat = format === "rub" ? "ru-RU" : "en-US";
  const formatter = new Intl.NumberFormat(currencyFormat, {
    style: "currency",
    currency: format,

    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatter.format(price);
};
