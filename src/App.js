import {useState, createContext, useEffect} from "react";
import Enjoy from "./components/Enjoy/Enjoy";
import Header from "./components/Header/Header";
import Download from "./components/Download/Download";
import Watch from "./components/Watch/Watch";
import KidsProfile from "./components/KidsProfile/KidsProfile";
import Questions from "./components/Questions/Questions";
import Footer from "./components/Footer/Footer";
import './App.css';
import languages from './data/languages.json'

export const Context = createContext({})

export default function App() {

    const [selectedLanguage , setSelectedLanguage] = useState(languages)

    useEffect(() => {
        onSelect('english')
    }, [])

    function onSelect(language) {
        setSelectedLanguage(languages.find(lang => lang.slice(0,1).join`` === language)[1])
    }

  return (
      <>
          <Context.Provider value={{selectedLanguage, setSelectedLanguage}}>
              <Header onSelect={onSelect}/>
              <Enjoy />
              <Download />
              <Watch />
              <KidsProfile />
              <Questions />
              <Footer />
          </Context.Provider>
      </>
  )
}


