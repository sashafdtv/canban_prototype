<template>
  <div class="task">
    <!--    {{ title }}-->
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
  },
};
</script>

<style scoped>
.task {
  border: 1px solid #d4d1d9;
  font-size: 12px;
}

.plug {
  height: 20px;
  background-color: rgba(240, 241, 241, 1);
  border-radius: 5px;
  /*margin-bottom: 5px;*/
  flex: 1;
  margin: 5px;
}

.flex {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
}
</style>
