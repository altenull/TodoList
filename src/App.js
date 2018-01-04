import React, { Component } from 'react';
import { TodoListTemplate, TodoItemList, Form, Palette } from './components';

class App extends Component {

  id = 3;

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 첫번째 해야할 일', checked: false },
      { id: 1, text: ' 두번째 해야할 일', checked: true },
      { id: 2, text: ' 세번째 해야할 일', checked: false }
    ],
    color: '#343A40'
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos, color } = this.state;
    if (input === '') {
      return;
    }
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color
      })
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };
    
    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleSelect = (selectedColor) => {
    const { color } = this.state;
    if (color === selectedColor) {
      return;
    }
    this.setState({
      color: selectedColor
    });
  }

  render() {
    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelect
    } = this;

    const colors = [
      '#343A40',
      '#F03E3E',
      '#12B886',
      '#228AE6'
    ];

    return (
      <TodoListTemplate 
        palette={(<Palette
          colors={colors}
          selected={color}
          onSelect={handleSelect}
        />)}
        form={(<Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          color={color}
        />)}
      >
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;