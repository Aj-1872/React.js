import React from 'react'

// const capi = ()=>{
//   const capitalize = (word)=>{
//     const Lower = word.toLowerCase();
//   }
// } 


export default function Alert(x) {
  return (
    x.alert && 
      <div className={`alert alert-${x.alert.type} alert-dismissible fade show text-${x.revMode}`} role="alert">
        <strong>{x.alert.type}</strong>:{x.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
  )
}

