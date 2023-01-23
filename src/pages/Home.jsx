import Download from '../components/Download/Download'
import Enjoy from '../components/Enjoy/Enjoy'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import KidsProfile from '../components/KidsProfile/KidsProfile'
import Questions from '../components/Questions/Questions'
import Watch from '../components/Watch/Watch'

export default function Home({ onSelect, isLogged }) {
  return (
    <>
      <Header onSelect={onSelect} isLogged={isLogged} />
      <Enjoy />
      <Download />
      <Watch />
      <KidsProfile />
      <Questions />
      <Footer onSelect={onSelect} />
    </>
  )
}
