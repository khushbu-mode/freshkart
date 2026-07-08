import Hero from "../../components/Hero/Hero";
import Categories from "../../Categories/Categories";
import OfferBanner from "../../OfferBanner/OfferBanner";
import ProductSection from "../../ProductCard/ProductSection";

function Home() {
  return (
    <main className="mt-10">
      <Hero />

      <Categories />

      <OfferBanner />

      <ProductSection />
    </main>
  );
}

export default Home;