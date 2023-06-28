import React from 'react'



export default function Alert(x) {
  return (
    <div>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {x.alert}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
    </div>
  )
}

