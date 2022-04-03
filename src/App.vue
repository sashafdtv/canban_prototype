<template>
  <div class="container">
    <div class="boards">
      <board
        v-for="(board, index) in boards"
        :key="board.name"
        v-model="boards[index]"
      >
        <card
          v-for="item in board.items"
          :key="item.name"
          :title="item.name"
          :board-class="board.class"
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
  mounted() {
    console.log(this.boards);
  },
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
  font-family: "Fira Sans Condensed", sans-serif;
  font-weight: 400;
  color: #495559;
}

body {
  margin: 0;
  background-color: #f1f2f3;
  padding: 0;
}

.ghost {
  opacity: 0.1;
  border-radius: 5px;
  border-bottom: none;
}

.lead.sortable-chosen {
  background: #eff6ff;
}

/* TODO REMOVE AFTER LINK FA*/
.lead.sortable-chosen .icon-plug {
  background: #2589ff;
}

.lead.sortable-chosen .lead-info {
  color: rgba(39, 137, 255, 0.2);
}

.ghost.lead * {
  visibility: hidden;
}

.ghost.new {
  background: #ffc93c;
}

.ghost.work {
  background: #0052b3;
}

.ghost.done {
  background: #00a161;
}

.ghost.close {
  background: #ff4f01;
}

.container {
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

.controls input::placeholder {
  color: rgba(142, 145, 149, 0.71);
}
</style>
