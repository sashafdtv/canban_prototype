<template>
  <div class="container">
    <div class="controls">
      <input v-model="newTask" placeholder="Enter Task" @keyup.enter="add" />
    </div>

    <div class="boards">
      <div class="task">
        <h3>Backlog</h3>
        <draggable :list="arrBacklog">
          <div v-for="element in arrBacklog" :key="element.name">
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
      arrInProgress: [],
      arrTested: [],
      arrDone: [],
    };
  },
  methods: {
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
