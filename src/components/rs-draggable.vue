<template>
  <draggable
    :list="value"
    @start="startDrag"
    @end="stopDrag"
    ghost-class="ghost"
    :move="checkMove"
    group="a"
  >
    <slot name="draggable-content" />
    <draggable/>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "rs-draggable",
  components: { draggable },
  props: {
    value: Array,
  },
  methods: {
    startDrag(e) {
      console.log(e);
      console.log("startDrag");
    },
    stopDrag(e) {
      console.log(e);
      console.log("stopDrag");
    },
    checkMove(e) {
      console.log("Future index: " + e.draggedContext.futureIndex);
    }
  }
};
</script>

<style scoped></style>
