<template>
  <div class="task">
    {{ title }}
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
