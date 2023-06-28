import React from 'react'


export default function Alert(x) {
  return (
    x.alert && 
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{x.alert.type}</strong>:{x.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
  )
}

