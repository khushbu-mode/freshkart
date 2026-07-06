import offerData from "./offerData";
import OfferCard from "./OfferCard";

function OfferBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-12">

      <div className="grid grid-cols-3 gap-6">

        {offerData.map((offer) => (

          <OfferCard

            key={offer.id}

            title={offer.title}

            subtitle={offer.subtitle}

            button={offer.button}

            image={offer.image}

            bgColor={offer.bgColor}

          />

        ))}

      </div>

    </section>
  );
}

export default OfferBanner;