<template>

    <div>
        <div>
          <h2 v-if="user">
            Good to see you back, {{ user }}!
          </h2>
          </div>
        <ul>

          <li v-for="todo in todos" v-bind:key="todo.id"
            :class="{done: todo.done}"
            class="todo-item" >
            <input type="checkbox" v-bind:id="todo.id" v-bind:checked="todo.done" @click = "handleCheck">
            {{ todo.text }}
            <button @click="removeTodo(todo.id)">X</button>
          </li>
        </ul>
        <div>
          <!-- display the input field and bind it into todo'' -->
          <input @keyup.enter="addTodo" type="text" v-model="todo" placeholder="add todo..."/>
          <button @click="addTodo">add</button>
          <button @click="clearAllTodos">clear all</button>
        </div>
        <div>
          <h5>User login</h5>
          <input v-model="name" placeholder="Enter secret user" />
        </div>

    </div>
</template>

<script>

// import css

export default {

  //creating a data function that is returning todos
  data() {
    return {
      //array of todos:
      todo: '',
      todos: [
        {
            //id for each todo:
            id: Math.random(),
            //content of todos
            text: 'text',
        },
        {
            //id for each todo:
            id: Math.random(),
            //content of todos
            text: 'text2',
        },

      ],
      name: "",
      user: "",
    }
  },
  methods: {
    addTodo() {
      if (this.todo.length === 0)  {
        return;
      }
        this.todos.push({
          id: Math.random(),
          text: this.todo,
          })
          this.todo = '';


    },
    handleCheck(event) {
      const {checked, id} = event.target;
      this.todos = this.todos.map((todo) => {
        if (todo.id !=id) {
          return todo;
        }
        return {
          ...todo,
          done:checked,
        };
      });
    },
    removeTodo(todoId) {
      this.todos = this.todos.filter((todo) => todo.id !==todoId)
    },
    clearAllTodos() {
      this.todos = []
    }

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
.highlight {
  color: #223354;
}

.done {
  opacity: 0.4;
}

body {
    background: #2e2e2e;
    color: #f9f9f9;
}

.todo-item:hover {
  background: wheat;
}
</style>
