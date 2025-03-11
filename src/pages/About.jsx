import AboutBanner from "../components/AboutBanner";
import Agencybackg from "../components/Agencybackg";
import Cards from "../components/Cards";
import CTA from "../components/CTA";
import FeaturesSection from "../components/FeaturesSection";
// import Productslider from "../components/Product-slider";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <Agencybackg />
      {/* <Productslider /> */}
      <Cards />
      
      <CTA />
      <FeaturesSection />
     
    </div>
  )
}

export default About
