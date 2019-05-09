<template>
  <section>
    <input type="checkbox" id="toggle-all" class="toggle-all" v-model="allDone">
    <label for="toggle-all">全选</label>
    <ul class="todo-list">
      <li
        v-for="(item,index) in todos"
        :key="index"
        :class="{completed:item.complated,editing:item == editTodo}"
        class="todo"
      >
        <div class="view">
          <input type="checkbox" class="toggle" v-model="item.complated">
          <label @dblclick="editItem(item)">{{item.title}}</label>
          <button class="destroy" @click="delItem(item)"></button>
        </div>
        <input
          type="text"
          class="edit"
          v-model="item.title"
          @blur="doneEdit(item)"
          @keyup.enter="doneEdit(item)"
          @keyup.esc="cacelEdit(item)"
        >
      </li>
    </ul>
  </section>
</template>
<script>
import api from "@/api";
let cacheTitle = "";
export default {
  name: "mainView",
  data() {
    return {
      editTodo: null
    };
  },
  props: {
    todos: {
      type: Array
    }
  },

  computed: {
    remaining() {
      return api.active(this.todos).length;
    },
    allDone: {
      get() {
        return this.remaining == 0;
      },
      set(value) {
        this.$emit("all-done", value);
      }
    }
  },
  methods: {
    doneEdit(item) {
      this.editTodo = null;
      item.title = item.title.trim();
      if (!item.title) {
        this.delItem(item);
      }
    },
    cacelEdit(item) {
      item.title = cacheTitle;
      this.editTodo = null;
    },
    editItem(item) {
      cacheTitle = item.title;
      this.editTodo = item;
    },
    delItem(item) {
      this.$emit("del-item", item);
    }
  }
};
</script>
<style lang="scss" scoped>
.toggle-all + label {
  top: 8px;
}
.view label {
  text-align: start;
  color: #9c9999;
}
.todo-list li .toggle {
  left: 0px;
}
</style>
