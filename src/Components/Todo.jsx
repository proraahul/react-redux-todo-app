import React from 'react'
import { useState  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, removeTodo } from '../actions/index';
import TodoIcon from "../img/todo_icon.png"
import './Todo.css'



const Todo = () => {
    const dispatch = useDispatch()
    const list = useSelector((state) => state.todoReducers.list)
    const [inputData, setInputData] = useState("")

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={TodoIcon} alt='todolist' />
                        <figcaption>
                            Add Your List Here ✌...
                        </figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder='✍ Add Items...' onChange={(event) => setInputData(event.target.value)} value={inputData} />
                        <i className='fa fa-plus add-btn' onClick={() => dispatch(addTodo(inputData), setInputData(''))}></i>
                    </div>
                    <div className="showItems">
                        {list.map((curElem) => {
                            return (
                                <div className="eachItem" key={curElem.id}>
                                    <h3>{curElem.data}</h3>
                                    <div className="todo-btn"> 
                                        <i className="fa fa-edit add-btn" ></i>
                                        <i className='far fa-trash-alt add-btn' onClick={() => dispatch(deleteTodo(curElem.id))}></i>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="showItems">
                        <button className='btn effect04' data-sm-link-text="remove All" onClick={()=> dispatch(removeTodo())}><span>check List</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Todo;