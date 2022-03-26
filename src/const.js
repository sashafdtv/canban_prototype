export const BOARDS = [
  {
    name: "Новый",
    items: [
      { name: "Карточка 1" },
      { name: "Карточка 2" },
      { name: "Карточка 3" },
      { name: "Карточка 4" },
    ],
    color: "#F8DD6F",
  },
  {
    name: "В работе",
    items: [{ name: "Карточка 5" }, { name: "Карточка 6" }],
    color: "#4B8ED8",
  },
  {
    name: "Оплачен",
    items: [],
    color: "#90C82E",
  },
  {
    name: "Отменен",
    items: [],
    color: "#E66720",
  },
];

export const DEFAULT_COLOR = "#FDF139";

export const DRAGGABLE_OPTIONS = {
  animation: 300,
  disabled: false,
  ghostClass: "ghost",
};
