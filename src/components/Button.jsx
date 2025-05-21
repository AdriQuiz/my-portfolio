import React from 'react'

function Button({content, type, href}) {
  return (
    <a href={href} className={`${type === "blue" ? "bg-blue-400 text-white hover:bg-blue-700" : "bg-white text-blue-400"} 
        font-bold p-4 rounded-md`}>
        {content}
    </a>
  )
}

export default Button