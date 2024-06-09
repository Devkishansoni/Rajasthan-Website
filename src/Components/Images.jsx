import React from 'react'

export default function Images() {
  return (
      <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      <img src="/path/to/image1.jpg" alt="Hawa Mahal" className="w-full h-auto" />
      <img src="/path/to/image2.jpg" alt="Jantar Mantar" className="w-full h-auto" />
      <img src="/path/to/image3.jpg" alt="City Palace" className="w-full h-auto" />
      <img src="/path/to/image4.jpg" alt="Amer Fort" className="w-full h-auto" />
    </div>
      </>
  )
}
