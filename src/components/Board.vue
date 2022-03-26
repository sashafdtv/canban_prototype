<template>
  <div class="board">
    <div class="header-board">
      <div
        class="background-wrapper"
        :style="{ borderBottom: '3px solid' + this.value.color }"
      >
        <h3>{{ value.name }}</h3>
      </div>
    </div>

    <div class="body-board">
      <draggable
        :list="value.items"
        :data-key="value.class"
        :move="moveHandler"
        v-bind="draggableOptions"
        class="tasks"
        ghost-class="ghost"
        group="board"
      >
        <slot />
      </draggable>
    </div>
    <div class="footer-board">
      <div class="add-new-task-btn"></div>
    </div>
  </div>
</template>

<script>
import { DRAGGABLE_OPTIONS, DEFAULT_COLOR } from "../const";
import draggable from "vuedraggable";

export default {
  name: "Board",
  components: {
    draggable,
  },
  data() {
    return {
      defaultColor: DEFAULT_COLOR,
      draggableOptions: DRAGGABLE_OPTIONS,
    };
  },
  props: {
    value: {
      type: Object,
    },
  },
  methods: {
    moveHandler(e) {
      const cardElement = e.dragged;
      const previewBoard = cardElement.dataset.board;
      console.log("get ", e.from.getAttribute("data-key"));
      const nextBoard = e.to.getAttribute("data-key");

      if (previewBoard !== nextBoard) {
        cardElement.classList.remove(previewBoard);
        cardElement.classList.add(nextBoard);
        console.log("set ", cardElement.dataset.board);
        cardElement.dataset.board = nextBoard;
      }
    },
  },
};
</script>

<style scoped>
.tasks {
  min-height: 1000px;
}
h3 {
  font-size: 16px;
}

.background-wrapper {
  padding: 20px;
  margin: 0 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.header-board {
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.body-board {
  padding: 20px;
  padding-bottom: 0;
  margin-bottom: 10px;
}

.board {
  min-width: 300px;
  min-hight: 300px;
  border-radius: 10px;
  margin: 0 10px;
  padding-bottom: 20px;
  color: black;
  transition: height 1s;
  border: 1px solid rgba(191, 186, 199, 0.67);
  background-color: #fafafa;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
}

.board h3 {
  text-align: center;
  margin: 0;
}

.footer-board {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  position: relative;
  bottom: 0;
  margin-top: auto;
}

.add-new-task-btn {
  border-radius: 100%;
  height: 50px;
  width: 50px;
  border: 2px dotted cornflowerblue;
}
</style>
