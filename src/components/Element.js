import React, {Fragment, useEffect, useState} from 'react'

const Element = ({ showPreview, item, index}) => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if(item !== undefined) {setIsLoading(false)}
  }, [item])
  return (
    <Fragment>
      {isLoading == false &&
        <div className="content__item" onClick={() => {showPreview(index)}}>
          <p className="content__item-title">{item.title}</p>
          <p className="content__item-desc">0 of 3 substacks</p>
      </div>
      }
    </Fragment>
  )
}

export default Element