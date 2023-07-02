import React from 'react'


  const capitalize = (word)=>{
    const Lower = word.toLowerCase();
    return Lower.charAt(0).toUpperCase() + Lower.slice(1);
  }


export default function Alert(x) {
  return (
    <div style={{height:'50px'}}>
    {x.alert && 
    <div className={`alert alert-${x.alert.type} alert-dismissible fade show text-${x.revMode}`} role="alert">
    <strong>{capitalize(x.alert.type)}</strong>:{x.alert.msg}
    </div>}
    </div>
  )                
}

