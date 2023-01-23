import { useState, createContext, useEffect, useRef } from 'react'
import Enjoy from './components/Enjoy/Enjoy'
import Header from './components/Header/Header'
import Download from './components/Download/Download'
import Watch from './components/Watch/Watch'
import KidsProfile from './components/KidsProfile/KidsProfile'
import Questions from './components/Questions/Questions'
import Footer from './components/Footer/Footer'
import languages from './data/languages.json'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

export const Context = createContext({})

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages)

  useEffect(() => {
    onSelect('english')
  }, [])

  function onSelect(language) {
    setSelectedLanguage(
      languages.find((lang) => lang.slice(0, 1).join`` === language)[1]
    )
  }

  const optionRef = useRef()

  return (
    <>
      <BrowserRouter>
        <Context.Provider
          value={{ selectedLanguage, setSelectedLanguage, optionRef }}
        >
          <Header onSelect={onSelect} />
          <Enjoy />
          <Download />
          <Watch />
          <KidsProfile />
          <Questions />
          <Footer onSelect={onSelect} />
        </Context.Provider>
      </BrowserRouter>
    </>
  )
}
