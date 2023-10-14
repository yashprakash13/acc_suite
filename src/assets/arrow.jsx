import React from "react"

const Arrow = ({ classes }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="1 1 24 24"
      strokeWidth={1.2}
      stroke="currentColor"
      className={`${classes} p-0`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  )
}

export default Arrow
