import React, { useState, Fragment, useContext, useEffect } from 'react'
import PreviewModal from './PreviewModal'
import Element from './Element'
import DataContext from "../context/data-context";

const Content = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false)
  const {data, setData, board, setBoard} = useContext(DataContext)
  const [modalItem, setModalItem] = useState({})
  const currentItem = data[board]
  let showPreview = (id) => {
    setModalItem(id)
    setShowPreviewModal(true)
  }
  let closeModal = () => {
    setShowPreviewModal(false)
  }
  
  

  return (
    <Fragment>
      {showPreviewModal ? <PreviewModal modalItem={modalItem} closeModal={closeModal}/> : null}
      <div className="content">
        <div className="content__row">
          <p className="content__row-title"><span></span> TODOS</p>
          {currentItem.elements.map((item, i) => {
            if(item.status == "todo") {
              return <Element key={i} index={i} showPreview={showPreview} item={item} />
            }
          })}
        </div>
        <div className="content__row">
          <p className="content__row-title"><span style={{background: "#8571F9"}}></span>DOING</p>
          {currentItem.elements.map((item, i) => {
            if(item.status == "doing") {
              return <Element key={i} index={i} showPreview={showPreview} item={item}/>
            }
          })}
        </div>
        <div className="content__row">
          <p className="content__row-title"><span style={{background: "#61E4AC"}}></span>DONE</p>
          {currentItem.elements.map((item, i) => {
            if(item.status == "done") {
              return <Element key={i} index={i} showPreview={showPreview} item={item}/>
            }
          })}
        </div>
      </div>
    </Fragment>
  )
}

export default Content