import React,{useEffect, useContext, useState, Fragment} from 'react'
import { FiX } from "react-icons/fi";
import DataContext from "../context/data-context";

const PreviewModal = ({closeModal, modalItem}) => {
    const {data, setData, board, setBoard} = useContext(DataContext)
    const [todoInput, setTodoInput] = useState('')
    const currentItem = data[board].elements[modalItem]
    const todos = data[board].elements[modalItem].todos
    let todoChecked = (i) => {
        let newData = [...data]
        let newTodo = newData[board].elements[modalItem].todos[i]
        console.log(newTodo)
        if(newTodo.checked) {newTodo.checked=false} else {newTodo.checked = true}
        setData(newData)
    }
    let changeStatus = (status) => {
        let newData = [...data]
        let newElement = newData[board].elements[modalItem]
        newElement.status = status.toLowerCase()
        setData(newData)
        console.log(data)
    }

    let Button = (text, status) => {
        var active = false
        if(text.toLowerCase() == status.toLowerCase()) {
            active = true
        }
        return (
            <button onClick={() => {changeStatus(text)}} style={active ? {background:'#4AC3E6'} : {}} >{text}</button>
        )
    }

    let createTodo = (e) => {
        if(e.code == "Enter") {
            var newTodo = {
                title: todoInput,
                checked: false
            }
            let addTodo = data[board].elements[modalItem].todos.push(newTodo)
            let newData = [...data, addTodo]
            let arrayPop = newData.pop()
            setData(newData)
            setTodoInput('')
        }
    }

    return (
        <div className="preview">
            <div className="preview__close" onClick={closeModal}>
                <FiX />
            </div>
            <p className="preview__title">{currentItem.title}</p>
            <p className="preview__desc">{currentItem.description}</p>
            <div className="preview__todos">
                <p className="preview__subtitle">Substack</p>
                {todos.map((item, i) => { return (
                    <div className="preview__todo">
                        <input type="checkbox" checked={item.checked} onChange={() => {todoChecked(i)}}/>
                        <p className={`preview__todo-text ${item.checked ? "underline" : ""}`}>{item.title}</p>
                    </div>
                )})}
                <div className="preview__add-todo">
                    <input type="text" placeholder="Add text for your todo" value={todoInput} onChange={(e) => {setTodoInput(e.target.value)}} onKeyDown={(e) => {createTodo(e)}} />
                </div>
            </div>
            <p className="preview__subtitle">Status</p>
            <div className="preview__buttons">
                {Button("TODO", currentItem.status)}
                {Button("DOING", currentItem.status)}
                {Button("DONE", currentItem.status)}
            </div>
        </div>
    )
}

export default PreviewModal