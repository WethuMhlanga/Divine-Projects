import Carousel from '../components/Carousel'
import Services from '../components/Services'
import About from '../components/About'
import Gallery from '../components/Gallery'
import MenuHighlights from '../components/MenuHighlights'
import Contact from '../components/Contact'

function Home() {
  return (
    <>
      <Carousel />
      <Services />
      <About />
      <Gallery />
      <MenuHighlights />
      <Contact />
    </>
  )
}

export default Home
