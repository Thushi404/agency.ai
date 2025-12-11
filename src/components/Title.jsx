import React from 'react'

const Title = ({ title, desc }) => {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      
      <h2 className="text-3xl sm:text-5xl font-semibold leading-tight">
        {title}
      </h2>

      <p className="max-w-xl text-gray-500 dark:text-white/70 text-base sm:text-lg">
        {desc}
      </p>

    </div>
  )
}

export default Title
