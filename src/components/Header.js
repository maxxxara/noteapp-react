import React, { useState, Fragment, useContext } from 'react'
import logo from '../logo.svg';
import { FiMoreVertical, FiPlus } from "react-icons/fi";
import CreateModal from './CreateModal';
import DataContext from "../context/data-context";

const Header = () => {

    const [createModal, setCreateModal] = useState(false)
    const {data, setData, board, setBoard, burger, setBurger} = useContext(DataContext)
    const currentItem = data[board]

    let showCreateModal = () => {
        setCreateModal(true)
    }

    let closeModal = () => {
        setCreateModal(false)
    }

    let burgerClicked = () => {
        if(burger) {setBurger(false)} else {setBurger(true)}
    }

    return (
        <Fragment>
            {createModal ? <CreateModal closeModal={closeModal}/> : null}
            <header>
                <div className="header__content">
                    <div className="flexCenter">
                        <div class="header__content-sidebarButton">
                            <FiMoreVertical onClick={burgerClicked}/>
                        </div>
                        <div className="sidebar__content-logo">
                            <img src={logo} />
                        </div>
                        <div className="header__content-title">
                            <div className="header__content-sidebarButton">
                            </div>
                            <span>{currentItem.board_title}</span>
                        </div>
                    </div>
                    <div className="header__content-buttons">
                        <button 
                            onClick={showCreateModal}
                        ><FiPlus /> <span>Create New Task</span></button>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Header