export const BOARDS = [
  {
    name: "Backlog",
    items: [
      { name: "Я дагестанец" },
      { name: "Я русский" },
      { name: "Я чеченец" },
      { name: "Я ингуш" },
    ],
    color: "#ffd858",
  },
  {
    name: "Progress",
    items: [{ name: "Я татарин" }, { name: "Я еврей" }],
    color: "#fa8576",
  },
  {
    name: "Tested",
    items: [],
    color: "#a2d8ef",
  },
  {
    name: "Done",
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
