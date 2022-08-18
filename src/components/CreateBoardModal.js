import React, {useContext, useState} from 'react'
import { FiX } from "react-icons/fi";
import DataContext from "../context/data-context";

const CreateBoardModal = ({closeModal}) => {
  const {data, setData, board, setBoard} = useContext(DataContext);
  const [inputData, setInputData] = useState('')
  let createBoard = () => {
    var newBoard = {
      board_title: inputData,
      elements: [
        {
          title: "element test title",
          description: "element",
          todos: [
            {
              title: "todo test title",
              checked: false,
            }
          ],
          status: "todo"
        }
      ]
    }
    setData([...data, newBoard])
    setInputData('')
    closeModal()
  }

  return (
    <div className="create">
        <div className="create__close" onClick={closeModal}>
            <FiX />
        </div>
        <p className="create__title">Add New Board</p>
        <div className="create__input">
            <label>Board Title</label>
            <input 
              type="text" 
              placeholder="e.g Title first"
              onChange={(e) => {setInputData(e.target.value)}}
            />
        </div>
        <div className="create__input">
            <button onClick={createBoard}>Create Board</button>
        </div>
    </div>
  )
}

export default CreateBoardModal