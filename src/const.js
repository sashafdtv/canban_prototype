export const BOARDS = [
  {
    name: "Новый",
    items: [
      { name: "Карточка 1" },
      { name: "Карточка 2" },
      { name: "Карточка 3" },
      { name: "Карточка 4" },
    ],
    color: "#ffd858",
  },
  {
    name: "В работе",
    items: [{ name: "Карточка 5" }, { name: "Карточка 6" }],
    color: "#fa8576",
  },
  {
    name: "Оплачен",
    items: [],
    color: "#a2d8ef",
  },
  {
    name: "Отменен",
    items: [],
    color: "#a2d859",
  },
];

export const DEFAULT_COLOR = "#FDF139";

export const DRAGGABLE_OPTIONS = {
  animation: 300,
  disabled: false,
  ghostClass: "ghost",
};
