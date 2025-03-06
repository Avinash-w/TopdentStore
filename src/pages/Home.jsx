import Productportfolio from "../components/Productportfolio"
import Slider from "../components/Slider"
import Topbrands from "../components/Topbrands"
import Recommendedproducts from "../components/Recommendedproducts"
import Cards from "../components/Cards"
import CTA from "../components/CTA"
import Productslider from "../components/Product-slider"


const Home = () => {
  return (
    <div>
        <Slider/>
        <Topbrands/>
        <Productportfolio />
        <Recommendedproducts />
        <Cards/ >
        <CTA />
        <Productslider />
     
    </div>
  )
}

export default Home
