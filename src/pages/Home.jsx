import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import WhyChooseUs from "../components/WhyCooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Gallery />
      <Reviews />
    </>
  );
}
