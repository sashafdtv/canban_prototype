<template>
  <div class="lead" :class="boardClass" :data-board="boardClass">
    <div class="lead-icon">
      <!--   TODO вставить норм иконку   -->
      <div class="icon-plug" />
    </div>

    <div class="lead-info">
      <div class="lead-info-row">
        <div class="lead-title">Покупка R2D2</div>
        <div class="lead-id">#123456</div>
      </div>
      <div class="lead-info-row">
        <div class="lead-name">Люк Скайуокер</div>
        <div class="lead-date">25 ноя. 2020</div>
      </div>
      <div class="lead-info-row">
        <div class="lead-phone">+7 (962) 904-2805</div>
      </div>
      <div class="lead-info-row">
        <div class="lead-source">Яндекс Директ</div>
        <div class="lead-price">1 237 923 ₽</div>
      </div>
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
.lead {
  font-size: 13px;
  background-color: white;
  margin: 10px 0;
  padding: 10px 10px;
  border-bottom: 1px solid #d4d1d9;
  display: flex;
  width: 100%;
  cursor: pointer;
}

.lead-icon {
  width: 36px;
}

.lead-info {
  flex: 1;
}

.lead-title {
  font-weight: 700;
}

.lead-info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.icon-plug {
  width: 20px;
  height: 20px;
  background: #495559;
  border-radius: 100%;
}
</style>
