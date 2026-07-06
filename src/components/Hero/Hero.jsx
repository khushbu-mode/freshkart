import HeroImage from "../../assets/hero-banner.jpg";


function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-5">

      <div
        className="
        h-[320px]
        rounded-3xl
        bg-gradient-to-r
        from-green-700
        via-green-600
        to-green-300
        overflow-hidden
        flex
        items-center
        justify-between
        px-12
        "
      >

        {/* LEFT */}

        <div className="max-w-lg text-white">

          <h1 className="text-4xl font-bold leading-tight">

            Stock up on
            
            daily essentials

          </h1>

          <p className="mt-3 text-2xl font-light leading-relaxed">

            Fresh fruits, vegetables,
            dairy and groceries
            delivered in minutes.

          </p>

          <button
            className="
            mt-8
            bg-white
            text-green-700
            font-semibold
            px-7
            py-3
            rounded-xl
            hover:scale-105
            transition
            "
          >
            Shop Now
          </button>

        </div>

        {/* RIGHT */}

       <div className="w-[500px] h-[250px]">
          <img
            src={HeroImage}
            alt="Fresh Grocery"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>

    </section>
  );
}

export default Hero;