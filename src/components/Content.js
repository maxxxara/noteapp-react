import React, { useState, Fragment, useContext, useEffect } from 'react'
import PreviewModal from './PreviewModal'
import Element from './Element'
import DataContext from "../context/data-context";

const Content = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false)
  const {data, setData, board, setBoard} = useContext(DataContext)
  const currentItem = data[board]
  let showPreview = () => {
    setShowPreviewModal(true)
  }
  useEffect(() => {
    console.log("changed")
  }, [data])

  let closeModal = () => {
    setShowPreviewModal(false)
  }
  

  return (
    <Fragment>
      {showPreviewModal ? <PreviewModal closeModal={closeModal}/> : null}
      <div className="content">
        <div className="content__row">
          <p className="content__row-title"><span></span> TODOS (4)</p>
          {currentItem.elements.map((item, i) => {
            if(item.status == "todo") {
              return <Element key={i} showPreview={showPreview} item={item}/>
            }
          })}
        </div>
        <div className="content__row">
          <p className="content__row-title"><span style={{background: "#8571F9"}}></span>DOING (4)</p>
          {currentItem.elements.map((item, i) => {
            if(item.status == "doing") {
              return <Element key={i} showPreview={showPreview} item={item}/>
            }
          })}
        </div>
        <div className="content__row">
          <p className="content__row-title"><span style={{background: "#61E4AC"}}></span>DONE (4)</p>
          {currentItem.elements.map((item, i) => {
            if(item.status == "done") {
              return <Element key={i} showPreview={showPreview} item={item}/>
            }
          })}
        </div>
      </div>
    </Fragment>
  )
}

export default Content