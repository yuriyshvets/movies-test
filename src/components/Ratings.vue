<template>
  <div class="ratings-wrapper">
    <h2>Ratings</h2>

    <div class="ratings">
      <ProgressBar
        v-for="item in ratings"
        :key="item.Source"
        strokeColor="#42b983"
        :strokeWidth="8"
        :radius="30"
        :value="item.Value | percent"
        :transitionDuration="1000"
        class="rating"
      >
        <span class="value">{{ item.Value }}</span>
        <template v-slot:footer>
          <span class="source">{{ item.Source }}</span>
        </template>
      </ProgressBar>
    </div>
  </div>
</template>

<script lang="ts">
import ProgressBar from 'easy-circular-progress';

export default {
  name: 'Ratings',
  components: { ProgressBar },
  props: { ratings: Array },
  filters: {
    percent(value: string): number {
      let result;
      if (value.includes('/')) {
        const arr = value.split('/');
        result = (+arr[0] / +arr[1]) * 100;
      } else {
        const arr = value.split('%');
        result = (+arr[0] / 100) * 100;
      }

      return result;
    },
  },
};
</script>

<style scoped lang="scss">
@import '../styles/variables';

.ratings {
  display: flex;
}
.rating {
  text-align: center;
  background: #eee;
  border-radius: $border-radius;
  padding: 10px;
  width: 130px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  &::v-deep .percent {
    margin-top: -3px;
  }
}
.value {
  font-size: 12px;
}
.source {
  font-size: 14px;
  font-weight: 700;
}
</style>
