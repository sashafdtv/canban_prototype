export const BOARDS = [
  {
    name: "Новый",
    items: [
      { name: "Карточка 1" },
      { name: "Карточка 2" },
      { name: "Карточка 3" },
      { name: "Карточка 4" },
    ],
    colorRGB: [255, 216, 88],
  },
  {
    name: "В работе",
    items: [{ name: "Карточка 5" }, { name: "Карточка 6" }],
    // colorRGB: [255, 227, 132],
    colorRGB: [0, 132, 212],
  },
  {
    name: "Оплачен",
    items: [],
    // colorRGB: [162, 216, 239],
    colorRGB: [102, 196, 0],
  },
  {
    name: "Отменен",
    items: [],
    colorRGB: [255, 79, 0],
  },
];

export const DEFAULT_COLOR = "#FDF139";

export const DRAGGABLE_OPTIONS = {
  animation: 300,
  disabled: false,
  ghostClass: "ghost",
};
