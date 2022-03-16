<template>
  <div class="controls">
    <input v-model="taskName" placeholder="Enter Task" @keyup.enter="add" />
  </div>
</template>

<script>
export default {
  data: () => ({ taskName: "" }),
  methods: {
    add() {
      this.$emit("createTask", this.taskName);
    },
  },
};
</script>

<style scoped>
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
</style>
