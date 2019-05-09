<template>
  <header class="header">
    <h1>Todos</h1>
    <input
      type="text"
      placeholder="请输入代办事项"
      autofocus="autofocus"
      autocomplete="off"
      @keyup.enter="addItem()"
      v-model="currentVal"
      class="new-todo"
    >
  </header>
</template>
<script>
export default {
  name: "headView",
  data() {
    return {
      currentVal: ""
    };
  },
  methods: {
    addItem() {
      var value = this.currentVal && this.currentVal.trim();
      if (!value) {
        return;
      }
      this.$emit("add-item", { title: this.currentVal, complated: false });
      this.currentVal = "";
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
}
</style>

