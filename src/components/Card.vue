<template>
  <div class="task" :class="boardClass" :data-board="boardClass">
    <div class="plug" />
    <div class="flex">
      <div class="plug" />
      <div class="plug" />
    </div>
    <div class="flex">
      <div class="plug" />
      <div class="plug" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    boardClass: String,
  },
};
</script>

<style scoped>
.task {
  font-size: 12px;
  background-color: white;
  margin: 10px 0;
  padding: 20px 10px;
  border-bottom: 1px solid #d4d1d9;
}

.plug {
  height: 20px;
  background-color: rgba(240, 241, 241, 1);
  border-radius: 5px;
  /*margin-bottom: 5px;*/
  flex: 1;
  margin: 5px;
}

/*.task:active .plug {*/
/*  background: #2789ff;*/
/*}*/

.flex {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
}
</style>
