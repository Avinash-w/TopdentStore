import Productportfolio from "../components/Productportfolio"
import Slider from "../components/Slider"
import Topbrands from "../components/Topbrands"
import Recommendedproducts from "../components/Recommendedproducts"
import Cards from "../components/Cards"
import CTA from "../components/CTA"
// import Productslider from "../components/Product-slider"
import FeaturesSection from "../components/FeaturesSection"
import Tdp from "../components/Tdp"


const Home = () => {
  return (
    <div>
        <Slider/>
        <Topbrands/>
        <Tdp />
      
        <Productportfolio />
        <Recommendedproducts />
        <FeaturesSection />
        <Cards/ >
        <CTA />
        {/* <Productslider /> */}
     
    </div>
  )
}

export default Home
