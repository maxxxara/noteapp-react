import React from 'react'
import { FiX } from "react-icons/fi";

const PreviewModal = ({closeModal}) => {
    return (
        <div className="preview">
            <div className="preview__close" onClick={closeModal}>
                <FiX />
            </div>
            <p className="preview__title">Build UI for onboarding flow</p>
            <p className="preview__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className="preview__todos">
                <p className="preview__subtitle">Substack</p>
                <div className="preview__todo">
                    <input type="checkbox" />
                    <p className="preview__todo-text">Research competitor pricing and business models</p>
                </div>
                <div className="preview__todo">
                    <input type="checkbox" />
                    <p className="preview__todo-text">Research competitor pricing and business models</p>
                </div>
                <div className="preview__todo">
                    <input type="checkbox" />
                    <p className="preview__todo-text">Research competitor pricing and business models</p>
                </div>
                <div className="preview__add-todo">
                    <input type="text" placeholder="Add text for your todo" />
                </div>
            </div>
            <p className="preview__subtitle">Status</p>
            <div className="preview__buttons">
                <button style={{background: "#4AC3E6"}}>TODO</button>
                <button>DOING</button>
                <button>DONE</button>
            </div>
        </div>
    )
}

export default PreviewModal