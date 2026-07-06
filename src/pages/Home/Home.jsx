import Navbar from "../../layouts/Navbar";
import Hero from "../../components/Hero/Hero";
import Categories from "../../Categories/Categories";
import OfferBanner from "../../OfferBanner/OfferBanner";
import ProductSection from "../../ProductCard/ProductSection";
import Footer from "../../../src/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
            <main className="mt-10">
        <Hero />

        <Categories />
          <OfferBanner />
            <ProductSection />
              <Footer />



      </main>

    </>
  );
}

export default Home;