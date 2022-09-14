import FAQs from '../../components/FAQs'
import MainHeader from '../../components/MainHead'
import Programs from '../../components/Programs'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'
import Values from '../../components/Values'
import './home.css'

const Home = () => {
  return (
    <>
    <MainHeader/>
    <Programs/>
    <Values/>
    <FAQs/>
    <Testimonials/>
    </>
  )
}

export default Home