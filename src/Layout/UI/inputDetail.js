import React from 'react'

function InputDetail(props) {
  return (
    <div className="d-flex flex-column p-2 fw-light w-100">
      <label className="text-uppercase fst-italic ">{props.name}:</label>
      <input className="w-100" type="text" placeholder={props.placeholder} />
    </div>
  )
}

export default InputDetail
