import React from 'react'

function handleClick() {
    console.log("clicked")
}

const Button4 = () => {
  return (
    <div>
      <button 
      onClick={handleClick}
      className="flex flex-row m-auto bg-slate-900 text-white p-2 rounded hover:font-bold hover:bg-green-800">
        Return Book
      </button>
    </div>
  )
}

export default Button4
