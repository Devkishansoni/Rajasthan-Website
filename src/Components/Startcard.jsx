import React from 'react'

export default function Startcard({number,label}) {
  return (
      <>
      <div className="bg-white border border-orange-500 p-4 text-center">
      <div className="text-6xl font-bold text-orange-500">{number}</div>
      <div className="text-xl">{label}</div>
    </div>
      </>
  )
}
