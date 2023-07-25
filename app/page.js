import Banner from "./components/banner"
import Services from "./components/services"
import Testimonials from "./components/testimonial"
import WhyChoose from "./components/why-choose"
import "./page.css"
export default function Home() {
  return (
    <main>
      <Banner />
      <div className="container">
        <Services />
        <WhyChoose />

        <Testimonials />
      </div>
      <footer>
          <p> @2023 Rajeswari Ventures. All rights reserved.</p>
        </footer>
    </main>
  )
}
