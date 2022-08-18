import React, {useContext, useState, Fragment} from 'react'
import CreateBoardModal from './CreateBoardModal';
import { FiColumns, FiPlus, FiX } from "react-icons/fi";
import DataContext from "../context/data-context";

const Sidebar = () => {
  const [boardModal, setBoardModal] = useState(false)
  const {data, setData, board, setBoard} = useContext(DataContext);
  let changeBoard = (id) => {
    setBoard(id)
  }
  let showBoardModal = () => {
    setBoardModal(true)
  }
  let closeModal = () => {
    setBoardModal(false)
  }
  return (
    <Fragment>
      {boardModal ? <CreateBoardModal closeModal={closeModal}/> : null}
      <div className="sidebar">
        <div className="sidebar__content">
          <div className="sidebar__content-boards">
            <p className="sidebar__boards-title">All boards (4)</p>
            <div className="sidebar__boards-row">
              {data.map((item, i) => (
                <div key={i} className={`sidebar__board ${i == board ? "sidebar__board-active" : ""}`} onClick={() => {changeBoard(i)}}>
                  <FiColumns />
                  <p className="sidebar__board-title">{item.board_title}</p>
                </div>
              ))}
              <div className="sidebar__board-new" onClick={showBoardModal}>
                <FiPlus />
                <p className="sidebar__board-title">Create new board</p>
              </div>
              <div className="sidebar__board-new sidebar__board-close">
                <FiX />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Sidebar