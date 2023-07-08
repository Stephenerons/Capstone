import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import ProductDetails from "./page"


export const metadata = {
    title: 'Instructor',
    description: 'A short bio of our instructor',
  }


export default function layout({ params }) {
  return (
    <div> <Navbar/> <ProductDetails  params={params}/>   <Footer/> </div>
  )
}
