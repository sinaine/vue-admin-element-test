<template>
  <footer class="footer">
    <div>
      <span class="todo-count">{{todos.length}}项</span>
      <ul class="filters">
        <li>
          <a href="#/all" :class="{selected:this.current==='all'}">All</a>
        </li>
        <li>
          <a href="#/active" :class="{selected: this.current === 'active'}">Active</a>
        </li>
        <li>
          <a href="#/complated" :class="{selected: this.current == 'complated'}">Complated</a>
        </li>
      </ul>
      <button class="clear-completed" @click="removeComplated">清除</button>
    </div>
  </footer>
</template>
<script>
export default {
  name: "footerView",
  data() {
    return {};
  },
  props: {
    todos: {
      type: Array
    },
    current: {
      type: String,
      default: "all"
    }
  },
  methods: {
    removeComplated() {
      this.$emit("remove-complate");
    }
  }
};
</script>
