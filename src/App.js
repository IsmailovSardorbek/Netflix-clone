import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Enjoy from "./components/Enjoy/Enjoy";
import Header from "./components/Header/Header";
import Download from "./components/Download/Download";
import Watch from "./components/Watch/Watch";

function App() {
  return (
      <>
        <Header />
        <Enjoy />
        <Download />
        <Watch />
      </>
  )
}

export default App;
