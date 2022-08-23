import React from "react";
import {FaChevronLeft } from "react-icons/fa";

function ControlIzq(){
  const slideleft = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 100
  }
  return(
    <div className="control">
      < FaChevronLeft onClick={slideleft} />
    </div>
  )
}

export default ControlIzq;