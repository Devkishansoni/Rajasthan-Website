import React from 'react'

export default function Ticket() {
  return (
      <>
          <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-100 py-4">
        <div className="container mx-auto">
          <h1 className="text-center text-xl font-bold text-orange-500">TICKET HISTORY</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-white shadow-md py-10">
        <div className="container mx-auto flex justify-center items-center">
          <div className="w-full h-fit gap-3 max-w-3xl flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex-1">
              <label className="block mb-2 text-gray-700" htmlFor="loginMode">Select Login Mode</label>
              <select id="loginMode" className="block w-full px-4 py-2 border rounded-md">
                <option>MOBILE</option>
                <option>EMAIL</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-gray-700" htmlFor="visitorMobile">Visitor's Mobile</label>
              <input type="text" id="visitorMobile" className="block w-full px-4 py-2 border rounded-md" />
            </div>
            <button className="flex-shrink-0 bg-orange-500 text-white px-6 py-2 rounded-md">PROCEED</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>All rights reserved. Copyright © 2024 DOITC Government Of Rajasthan.</p>
          <div className="mt-2">
            <a href="#" className="inline-block">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="w-32 mx-auto"/>
            </a>
          </div>
        </div>
      </footer>
    </div>
      </>
  )
}
