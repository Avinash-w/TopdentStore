import AboutBanner from "../components/AboutBanner";
import Agencybackg from "../components/Agencybackg";
import Cards from "../components/Cards";
import CTA from "../components/CTA";
import FeaturesSection from "../components/FeaturesSection";
// import Productslider from "../components/Product-slider";
import Bestseller from "../components/bestseller"

const About = () => {
  return (
    <div>
      <AboutBanner />
      <Agencybackg />
      <Bestseller />
      {/* <Productslider /> */}
      <Cards />
      
      <CTA />
      <FeaturesSection />
     
    </div>
  )
}

export default About
