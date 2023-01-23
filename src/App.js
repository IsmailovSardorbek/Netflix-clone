import { useState, createContext, useEffect, useRef } from 'react'
import Home from './pages/Home'
import languages from './data/languages.json'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NotFound from './pages/NotFound'

export const Context = createContext({})

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages)

  const [isLogged, setIsLogged] = useState(false)

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
          <Routes>
            <Route
              path="/"
              element={<Home onSelect={onSelect} isLogged={isLogged} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </>
  )
}
