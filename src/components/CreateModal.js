import React, { useState, useContext } from 'react'
import { FiX } from "react-icons/fi";
import DataContext from "../context/data-context";

const CreateModal = ({closeModal}) => {
    const [titleInput, setTitleInput] = useState('')
    const [descInput, setDescInput] = useState('')
    const {data, setData, board, setBoard} = useContext(DataContext)
    const currentBoard = data[board]
    let createTask = () => {
        let newElement = {
            description: descInput,
            status: "todo",
            title: titleInput,
            todos: []
        }
        let addElem = data[board].elements.push(newElement)
        let newData = [...data, addElem]
        let arrayPop = newData.pop()
        setData(newData)
        closeModal()
    }

    return (
        <div className="create">
            <div className="create__close" onClick={closeModal}>
                <FiX />
            </div>
            <p className="create__title">Add New Task</p>
            <div className="create__input">
                <label>Title</label>
                <input 
                    type="text" 
                    placeholder="e.g Title first" 
                    onChange={(e) => {setTitleInput(e.target.value)}}
                />
            </div>
            <div className="create__input">
                <label>Description</label>
                <textarea onChange={(e) => {setDescInput(e.target.value)}} placeholder="Please write description"></textarea>
            </div>
            <div className="create__input">
                <button onClick={createTask}>Create Task</button>
            </div>
        </div>
    )
}

export default CreateModal