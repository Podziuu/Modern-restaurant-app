import React from 'react'

const ImageGallery = (props) => {
  return (
    <div className="min-w-[30%] mr-10 last:mr-0 select-none">
        <img className="h-full hover:opacity-60" src={props.image} />
    </div>
  )
}

export default ImageGallery