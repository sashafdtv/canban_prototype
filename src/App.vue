<template>
  <div class="container">
    <div class="boards">
      <board
        v-for="(board, index) in boards"
        :key="board.name"
        v-model="boards[index]"
      >
        <card
          v-for="items in board.items"
          :key="items.name"
          :title="items.name"
        />
      </board>
    </div>
  </div>
</template>

<script>
import Board from "./components/Board.vue";
import Card from "./components/Card";
import { BOARDS } from "./const";

export default {
  name: "App",
  components: { Board, Card },
  data() {
    return {
      boards: BOARDS,
    };
  },
  methods: {
    createTask() {
      if (this.newTask) {
        this.arrBacklog.push({ name: this.newTask });
        this.newTask;
      }
    },
  },
};
</script>

<style>
.flip-list-move {
  transition: all 0.5s;
}
* {
  box-sizing: border-box;
  font-family: "SF Pro Display";
}

body {
  margin: 0;
  background-color: #f1f2f3;
  padding: 0;
}

.ghost {
  opacity: 0.5;
}

.container {
  /*width: 100%;*/
  /* remove */
  height: 100vh;
  padding: 0;
  width: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.boards {
  display: flex;
  margin-top: 30px;
  overflow: scroll;
  padding: 0 20px;
  padding-bottom: 30px;
}

.task {
  background-color: white;
  margin: 10px 0;
  padding: 20px 10px;
  border-radius: 5px;
}
.tasks {
  min-height: 300px;
}

.controls input::placeholder {
  color: rgba(142, 145, 149, 0.71);
}
</style>
