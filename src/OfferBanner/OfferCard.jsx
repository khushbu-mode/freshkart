function OfferCard({
  title,
  subtitle,
  button,
  image,
  bgColor,
}) {
  return (
    <div
      className={`
      ${bgColor}
      rounded-xl
      p-5
      flex
      justify-between
      items-center
      h-50
      hover:shadow-lg
      transition-all
      duration-300
      `}
    >
      {/* Left */}

      <div>

        <h3 className="text-xl font-bold">
          {title}
        </h3>

        <p className="mt-2 text-gray-700">
          {subtitle}
        </p>

        <button
          className="
          mt-5
          bg-green-600
          text-white
          px-5
          py-2
          rounded-lg
          "
        >
          {button}
        </button>

      </div>

      {/* Right */}

      <img
        src={image}
        alt={title}
        className="w-32 h-62 object-contain"
      />


    </div>
    
  );
}

export default OfferCard;