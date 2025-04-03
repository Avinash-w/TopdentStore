import Productportfolio from "../components/Productportfolio"
import Slider from "../components/Slider"
import Topbrands from "../components/Topbrands"
import Recommendedproducts from "../components/Recommendedproducts"
import Cards from "../components/Cards"
import CTA from "../components/CTA"
// import Productslider from "../components/Product-slider"
import FeaturesSection from "../components/FeaturesSection"
import Tdp from "../components/Tdp"
import Ctahome from "../components/Ctahome"
import Bestseller from "../components/bestseller"


const Home = () => {
  return (
    <div>
        <Slider/>
        <Topbrands/>
        <Tdp />
        <Productportfolio />
        <Recommendedproducts />
        <Ctahome />
        <Bestseller />
        <Cards/ >
        <CTA />
        <FeaturesSection />
        {/* <Productslider /> */}
     
    </div>
  )
}

export default Home
