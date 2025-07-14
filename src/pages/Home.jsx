import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import WhyChooseUs from "../components/WhyCooseUs";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyChooseUs />
      <Gallery />
      <Reviews />
      <Footer />
    </>
  );
}
