<template>
  <div class="button">
    <button class="button__clear" @click="deleteValue"></button>
  </div>
</template>

<script>
export default {
  name: "DeleteButton",
  methods: {
    deleteValue() {
      this.$emit("deleteText");
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  float: right;
  &__clear {
    border: 1px solid transparent;
    background-color: transparent;
    display: inline-block;
    vertical-align: middle;
    outline: 0;
    cursor: pointer;
    position: absolute;
    top: 230px;
    right: -20px;
    &:after {
      content: "❌";
      display: block;
      width: 20px;
      height: 20px;
      position: absolute;
      // background-color: rgb(255, 255, 255);
      // box-shadow: 0 0 2px #e50f0f;
      z-index: 1;
      right: 35px;
      bottom: 203px;
      margin-top: 10px;
      padding: 2px;
      border-radius: 50%;
      text-align: center;
      color: #fff;
      font-weight: normal;
      font-size: 12px;
      cursor: pointer;
    }
  }
}
</style>
