<template>
  <div class="container">
    <div class="controls">
      <input v-model="newTask" placeholder="Enter Task" @keyup.enter="add" />
    </div>

    <div class="boards">
      <div class="board board-backlog">
        <h3>Backlog</h3>
        <draggable
          :list="arrBacklog"
          @start="startDrag"
          @end="stopDrag"
          group="a"
        >
          <div v-for="element in arrBacklog" :key="element.name" class="task">
            {{ element.name }}
          </div>
        </draggable>
      </div>
      <div class="board board-in-progress">
        <h3>InProgress</h3>
        <draggable
          :list="arrInProgress"
          @start="startDrag"
          @end="stopDrag"
          group="a"
        >
          <div
            v-for="element in arrInProgress"
            :key="element.name"
            class="task"
          >
            {{ element.name }}
          </div>
        </draggable>
      </div>
      <div class="board board-tested">
        <h3>Tested</h3>
        <draggable
          :list="arrTested"
          @start="startDrag"
          @end="stopDrag"
          group="a"
        >
          <div v-for="element in arrTested" :key="element.name" class="task">
            {{ element.name }}
          </div>
        </draggable>
      </div>
      <div class="board board-done">
        <h3>Done</h3>
        <draggable :list="arrDone" @start="startDrag" @end="stopDrag" group="a">
          <div v-for="element in arrDone" :key="element.name" class="task">
            {{ element.name }}
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "App",
  components: { draggable },
  data() {
    return {
      newTask: "",
      arrBacklog: [
        { name: "Code SignPage" },
        { name: "Test Dashboard" },
        { name: "Style Registration" },
        { name: "Help with Designs" },
      ],
      arrInProgress: [{ name: "Code SignPage" }],
      arrTested: [],
      arrDone: [],
    };
  },
  methods: {
    stopDrag() {
      console.log("stopDrag");
    },
    startDrag() {
      console.log("startDrag");
    },
    add() {
      if (this.newTask) {
        this.arrBacklog.push({ name: this.newTask });
        this.newTask;
      }
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "SF Pro Display";
}

body {
  margin: 0;
}

.container {
  width: 100%;
}

.controls {
  padding: 30px;
}

.controls input {
  width: 100%;
  border: 2px solid rgba(184, 189, 196, 0.71);
  box-shadow: none;
  outline: none;
  color: rgba(109, 112, 116, 0.71);
  outline: none;
  border-radius: 15px;
  padding: 10px;
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
  min-width: 200px;
  border-radius: 20px;
  padding: 20px;
  margin: 0 10px;
  color: black;
  height: fit-content;
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

.controls input::placeholder {
  color: rgba(142, 145, 149, 0.71);
}
</style>
