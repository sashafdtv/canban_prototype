<template>
  <div class="board">
    <!--  Title  -->
    <div
      class="header-board"
      :style="{
        borderBottom: '3px solid rgb(' + mainColorRGB + ')',
      }"
    >
      <div
        class="background-wrapper"
        :style="{ background: 'rgba(' + additionalColorRGBA + ')' }"
      >
        <h3>{{ value.name }}</h3>
      </div>
    </div>

    <!--  Items && Draggable wrapper  -->

    <div class="body-board">
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
    <!--    <div class="footer-board">-->
    <!--      <div class="add-new-task-btn"></div>-->
    <!--    </div>-->
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
  computed: {
    mainColorRGB() {
      return this.value.colorRGB.join(",");
    },
    additionalColorRGBA() {
      return this.value.colorRGB.join(",") + ",0.5";
    },
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

<style scoped>
h3 {
  font-size: 16px;
}

.background-wrapper {
  padding: 20px 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.header-board {
  background-color: white;
  border-bottom: 3px solid #ffd858;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.body-board {
  padding: 20px;
  padding-bottom: 0;
}

.board {
  min-width: 300px;
  border-radius: 10px;
  margin: 0 10px;
  padding-bottom: 20px;
  color: black;
  transition: height 1s;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border: 1px solid rgba(191, 186, 199, 0.67);
  background-color: #fafafa;
  position: relative;
}

.board h3 {
  text-align: center;
  margin: 0;
}

.footer-board {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  position: relative;
  bottom: 0;
}

.add-new-task-btn {
  border-radius: 100%;
  height: 30px;
  width: 30px;
  background-color: blue;
}
</style>
