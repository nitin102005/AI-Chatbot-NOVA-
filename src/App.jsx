import React, { useState } from 'react'
import Aurora from './components/Aurora'
import Home from './components/Home'
import ChatbotPage from './components/ChatbotPage'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')

  const handleTryChatbot = () => {
    setCurrentPage('chatbot')
  }

  const handleGoHome = () => {
    setCurrentPage('home')
  }


  return (
    <>
      {currentPage === 'home' ? (
        <div className="relative h-screen w-screen overflow-hidden bg-[#0B0F19] ">
          {/* Aurora background */}
          <Aurora />
          {/* Foreground content */}
          <div className="relative z-10">
            <Home onTryChatbot={handleTryChatbot} />
          </div>
        </div>
      ) : (
        <div className="relative h-screen w-screen overflow-hidden bg-[#0B0F19] ">
          {/* Aurora background */}
          <Aurora />
          {/* Chatbot page content */}
          <div className="relative z-10">
            <ChatbotPage onGoHome={handleGoHome} />
          </div>
        </div>
      )}
    </>
  )
}

export default App