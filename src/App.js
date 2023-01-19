import Enjoy from "./components/Enjoy/Enjoy";
import Header from "./components/Header/Header";
import Download from "./components/Download/Download";
import Watch from "./components/Watch/Watch";
import KidsProfile from "./components/KidsProfile/KidsProfile";
import Questions from "./components/Questions/Questions";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
      <>
        <Header />
        <Enjoy />
        <Download />
        <Watch />
        <KidsProfile />
        <Questions />
        <Footer />
      </>
  )
}

export default App;
