import Productportfolio from "../components/Productportfolio"
import Slider from "../components/Slider"
import Topbrands from "../components/Topbrands"
import Recommendedproducts from "../components/Recommendedproducts"
import Cards from "../components/Cards"
// import Productslider from "../components/Product-slider"
import FeaturesSection from "../components/FeaturesSection"
import Tdp from "../components/Tdp"
import CTA from "../components/CTA";
import Bestseller from "../components/bestseller"


const Home = () => {
  return (
    <div>
        <Slider/>
        <Topbrands/>
        <Tdp />
        <Bestseller />
        <Productportfolio />
        <Recommendedproducts />
        <Cards/ >
       <CTA />
        <FeaturesSection />
        {/* <Productslider /> */}
     
    </div>
  )
}

export default Home
