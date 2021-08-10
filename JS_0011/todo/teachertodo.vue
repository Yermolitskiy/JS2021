<template>
  <div>
    <h1 v-if="user">Good to see you back, {{ user }}!</h1>
    <h1 v-else>TODO App</h1>

    <div>
      <p>TODOs:</p>
      <ul>
        <li
            v-for="todo in todos"
            :key="`todo-${todo.id}`"
            :class="{done: todo.done}"
            class="todo-item"
        >
          <input
            type="checkbox"
            v-bind:id="todo.id"
            v-bind:checked="todo.done"
            @click="handleCheck"
          />
          {{ todo.value }}
          <span v-bind:id="todo.id" @click="removeTodo" class="red">[x]</span>
        </li>
      </ul>

      <div>
        <h4>Add TODO</h4>
        <input
          v-model="newTodo"
          @keyup.enter="onAdd"
          placeholder="What do you need to do?"
        />
        <button @click="onAdd">Add</button>
      </div>
    </div>

    <div>
      <h5>User login</h5>
      <input v-model="name" placeholder="Enter secret user" />
    </div>
  </div>
</template>

// note:
`@keyup.enter="onAdd"` this event will be only triggered if user preses "Enter" while inside input

<script>
export default {
  data() {
    return {
      todos: [{ id: Date.now(), value: "Finish TODO App", done: true }],
      name: "",
      user: "",
    };
  },
  methods: {
    onAdd() {
      const newTodo = {
        id: Date.now(),
        value: this.newTodo,
        done: false,
      };
      this.todos.push(newTodo);
      this.newTodo = ""; // reset the input
    },
    handleCheck(event) {
      const { checked, id } = event.target; // get todo id and checked state from HTML attributes we set in tempalte
      this.todos = this.todos.map((todo) => {
        // if ids don't match, then return unaltered object
        if (todo.id != id) {
          return todo;
        }
        // if found by id, then update "done" state
        return {
          ...todo,
          done: checked,
        };
      });
    },
    removeTodo(event) {
      const { id } = event.target;
      // remove by filtering out clicked todo by id from HTML attribute
      this.todos = this.todos.filter((todo) => todo.id != id);
    },
  },
  watch: {
    name(value) {
      if (value.startsWith("user-")) {
        this.user = value.replace("user-", "");
      } else {
        this.user = "";
      }
    },
  },
};
</script>

<style>
body {
  background: #2e2e2e;
  color: #9f9f9f;
}
.done {
  opacity: 0.4;
}
.red {
  color: tomato;
  cursor: pointer;
}
/** sometimes some tasks can be very simple :) */
.todo-item:hover {
  background: wheat;
}
</style>
