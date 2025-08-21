import HeroSection from '../../components/HomeComponents/HeroSection/HeroSection'
import NavBar from '../../components/NavBar/NavBar'
import Education from '../../components/HomeComponents/Education/Education'
import TimeLine from '../../components/HomeComponents/TimeLine/TimeLine'
import LeetcodeSection from '../../components/HomeComponents/LeetcodeSection/LeetcodeSection'
import MathsSection from '../../components/HomeComponents/MathsSection/MathsSection'
import BookSection from '../../components/HomeComponents/BookSection/BookSection'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
        <NavBar />
        
        <div className="flex flex-col md:space-y-20 space-y-10">
          <HeroSection />
          <Education />
          <TimeLine />
          <LeetcodeSection />
          <MathsSection />
          <BookSection />
        </div>

        <Footer />
    </>
  )
}

export default Home