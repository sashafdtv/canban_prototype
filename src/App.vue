<template>
  <div class="container">
    <controls @create-task="createTask" />

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
import Controls from "./components/Controls.vue";
import Board from "./components/Board.vue";
import Card from "./components/Card";
import { BOARDS } from "./const";

export default {
  name: "App",
  components: { Controls, Board, Card },
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
}

.ghost {
  opacity: 0.5;
}

.container {
  width: 100%;
}

.boards {
  display: flex;
  margin-top: 30px;
  overflow: scroll;
  padding-bottom: 30px;
}

.board-backlog {
  background-color: #ffd858;
}
.board-in-progress {
  background-color: #fa8576;
}
.board-tested {
  background-color: #a2d8ef;
}
.board-done {
  background-color: #a2d859;
}

.board {
  min-width: 300px;
  border-radius: 20px;
  padding: 20px;
  margin: 0 10px;
  color: black;
  transition: height 1s;
}

.board h3 {
  text-align: center;
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
