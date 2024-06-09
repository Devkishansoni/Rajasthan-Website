import React from 'react'

export default function Footer() {
  return (
      <>
      <footer className="bg-gray-900 text-white text-center p-4 mt-8">
      <p>Total Visitors: 232683</p>
      <p>Version: 1.0</p>
      <p className="mt-4">All rights reserved. Copyright © 2024 DOITC Government Of Rajasthan.</p>
      <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
        <img src="/path/to/google-play-badge.png" alt="Get it on Google Play" className="h-12 mx-auto" />
      </a>
    </footer>
      </>
  )
}
