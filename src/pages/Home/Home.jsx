import Navbar from "../../layouts/Navbar";
import Hero from "../../components/Hero/Hero";
import Categories from "../../Categories/Categories";

function Home() {
  return (
    <>
      <Navbar />
            <main className="mt-10">
        <Hero />

        <Categories />
      </main>

    </>
  );
}

export default Home;