import React from 'react'

const SubButton = (props) => {
    const handleSubBtn = () => {
        props.subBtn()
    }
  return (
    <button
    onClick={handleSubBtn}
    className={`${props.state > 35 ? "bg-orange-500":"bg-blue-500" } md:px-10 md:py-3 px-4 py-4 rounded-full active:scale-90 duration-150`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5 stroke-gray-100"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>
  )
}

export default SubButton