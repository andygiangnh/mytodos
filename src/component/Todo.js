import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input type='checkbox' onChange={this.props.markComplete.bind(this,id)}/>{' '}
                {title}
                <input type='submit' value='X' style={btnStype}
                    onClick={this.props.delTodo.bind(this, id)}/>
            </div>
        );
    }
}

const btnStype = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

Todo.PropTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todo;