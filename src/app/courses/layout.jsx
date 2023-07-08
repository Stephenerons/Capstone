import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Courses from "./page"

export const metadata = {
    title: 'Courses',
    description: 'Courses for E-learning',
  }


export default function layout() {
  return (
    <div> <Navbar/> <Courses/> <Footer/> </div>
  )
}
