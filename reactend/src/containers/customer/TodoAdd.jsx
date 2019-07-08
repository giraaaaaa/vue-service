import React, {Component} from 'react'
import TodoList from '../../components/TodoList'
class TodoAdd extends Component{
    constructor(){
        super()
        this.state = { items: [], text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e){
        this.setState({ text: e.target.value}); //setstate로 부모에게 값을 보낸다
    }
    handleSubmit(e){
        e.preventDefault();
        if(!this.state.text.length){
            return;
        }
        const newItem = {
            text : this.state.text,
            id: Date.now()
        }
        this.setState(state => ({
            items: state.items.concat(newItem),
            text:''
        }))
    }
    render() {
        return (
          <div>
            <h3>TODO</h3>
            <TodoList items={this.state.items} />
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="new-todo">
                What needs to be done?
              </label>
              <input
                id="new-todo"
                onChange={this.handleChange}
                value={this.state.text}
              />
              <button>
                Add #{this.state.items.length + 1}
              </button>
            </form>
          </div>
        );
      }
    
}

export default TodoAdd