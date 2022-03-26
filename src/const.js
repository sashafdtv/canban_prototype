export const BOARDS = [
  {
    name: "Новые",
    items: [
      { name: "Карточка 1" },
      { name: "Карточка 2" },
      { name: "Карточка 3" },
      { name: "Карточка 4" },
    ],
    color: "#FFC93C",
    class: "new",
  },
  {
    name: "В работе",
    items: [{ name: "Карточка 5" }, { name: "Карточка 6" }],
    color: "#0052B3",
    class: "work",
  },
  {
    name: "Оплачен",
    items: [],
    color: "#00A161",
    class: "done",
  },
  {
    name: "Отменен",
    items: [],
    color: "#FF4F01",
    class: "close",
  },
];

export const DEFAULT_COLOR = "#FDF139";

export const DRAGGABLE_OPTIONS = {
  animation: 300,
  disabled: false,
  ghostClass: "ghost",
};
