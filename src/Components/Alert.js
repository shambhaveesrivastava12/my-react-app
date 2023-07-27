import React from 'react'

function Alert(props) {
  const capital=(word)=>{
    const wrd = word.toLowerCase();
    return wrd.charAt(0).toUpperCase() + wrd.slice(1);
  }
  return (
              props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
             <strong>{capital(props.alert.type)}</strong>: {props.alert.msg}
            </div>

  )
}

export default Alert
