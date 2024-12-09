import React from 'react'

function handleClick() {
    console.log("clicked")
}

const Button3 = () => {
  return (
    <div>
      <button 
      onClick={handleClick}
      className="flex flex-row m-auto bg-slate-900 text-white p-2 rounded hover:font-bold hover:bg-green-800">
        Checkout Book
      </button>
    </div>
  )
}

export default Button3
