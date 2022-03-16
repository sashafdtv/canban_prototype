<template>
  <div class="board" :style="{ backgroundColor: value.color }">
    <!--  Title  -->
    <h3>{{ value.name }}</h3>

    <!--  Items && Draggable wrapper  -->
    <draggable
      :list="value.items"
      v-bind="draggableOptions"
      class="tasks"
      ghost-class="ghost"
      group="board"
    >
      <slot />
    </draggable>
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
};
</script>

<style scoped></style>
