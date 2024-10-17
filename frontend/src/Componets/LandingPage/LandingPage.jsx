import React from 'react'
import NavBar from './NavBar/NavBar'
import Header from './Header/Header'
import ChatbotAccess from './ChatbotAccess/ChatbotAccess'
import Features from './Features/Features'
import Footer from './Footer/Footer'

function LandingPage() {
  return (
    <div>
        <NavBar />
        <Header />
        <ChatbotAccess />
        <Features />
        <Footer />
    </div>
  )
}

export default LandingPage