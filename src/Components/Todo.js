import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const Todo = () => {
    // state 1 for list default value on line 1
    const [todos, setTodos] = useState([
        {   
            task: " Finish FiveM Coding",
            isDone: false
        },
        {                                            
            task: "Go to work",
            isDone: false
        }
        
    ])
    const [ todos_unsearched, setustodos] = useState(todos)
    console.log(todos_unsearched)
    // Get input function
    let todoInput = React.createRef();
    let todosearch = React.createRef();
    const addTodo = (e) => {
        setTodos([
            ...todos, {task: todoInput.current.value, isDone: false} 
        ])
        todoInput.current.value =""
        setustodos([
            ...todos, {task: todoInput.current.value, isDone: false} 
        ])
    };

    // Delete Task From Todos list
    const DeleteTask = (btn) => {
        setTodos([...todos.filter((element) => element.task !== btn)])
        setustodos([...todos.filter((element) => element.task !== btn)])
    }

    //Search todos
    const search = () => 
    {    
        if (todosearch.current.value === '') {
            console.log('SearchBar.is Empty = true')
            console.log(todos_unsearched)
            setTodos(todos_unsearched)
        } else {
            setTodos([...todos.filter((element) => element.task.includes(todosearch.current.value))]) 
        }
    }
    

    // Check Box
    const Checked = (e) => {
        setTodos([ ...todos.map((element) => 
            element.task === e ? ({...element, isDone : element.isDone = !element.isDone}) : element
        )])
    }

  return (

    <div className="Todo">
        <div className="title">
            <h1>ToDO App</h1>
        </div>

        <div className="Search-bar">
            <input ref={todosearch} onChange={ () => search() } type="text" placeholder='Type in to search.....' />
        </div>

        <div className="input-todos">
            <input ref={todoInput}  type="text" placeholder='Type in your tasks.....'  />
            <button onClick={ addTodo }>
                <FontAwesomeIcon icon={ faPlus }/>
            </button>
        </div>
        <div className="todo-list">
            <div className="text-todo">
                {
                    todos.map((todo) =>  (
                        <h4 style={ todo.isDone === true ? {textDecoration: 'line-through'} : {textDecoration: 'none'} }> { todo.task } 
                        <input  onChange={ ()=> Checked(todo.task) } type="checkbox"/>
                        <button onClick={ ()=> DeleteTask(todo.task) }>
                            <FontAwesomeIcon icon={ faMinus } />
                        </button>
                        </h4>
                    ))
                }
            </div>
        </div>

    </div>
  )

}

export default Todo