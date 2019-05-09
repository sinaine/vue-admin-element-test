<template>
  <div class="todoapp">
    <head-view @add-item="addTodo"></head-view>
    <main-view :todos="filterTodos" @del-item="delItem" @all-done="allDone"></main-view>
    <footer-view :todos="todos" :current="current" @remove-complate="removeComplated"></footer-view>
  </div>
</template>
<script>
import headView from "@/components/HeaderView";
import mainView from "@/components/MainView";
import footerView from "@/components/FooterView";
import api from "@/api";
export default {
  name: "",
  data() {
    return {
      todos: [],
      current: "all"
    };
  },
  components: {
    headView,
    mainView,
    footerView
  },
  watch: {
    $route(to) {
      this.current = to.name;
    },
    todos: {
      deep: true,
      handler: api.save
    }
  },

  computed: {
    filterTodos() {
      return api[this.current](this.todos);
    }
  },
  methods: {
    addTodo(value) {
      this.todos.unshift(value);
    },
    delItem(item) {
      this.todos.splice(this.todos.indexOf(item), 1);
    },
    allDone(value) {
      this.todos.map(item => {
        item.complated = value;
      });
    },
    removeComplated() {
      this.todos = [];
    }
  }
};
</script>
<style lang="scss" scoped>
.todoapp {
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 25px 50px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  .todo-input,
  .edit {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    -webkit-box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
</style>
