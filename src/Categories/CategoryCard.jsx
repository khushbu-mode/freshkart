function CategoryCard({ title, Icon, color }) {
  return (
    <div
      className={`
      ${color}
      rounded-xl
      h-30
      w-65
      flex
      flex-col
      items-center
      justify-center
      cursor-pointer
      hover:scale-105
      transition
      duration-300
      shadow-sm
      hover:shadow-lg
      `}
    >
      <Icon className="text-5xl text-green-700 mb-4" />

      <h3 className="font-semibold text-lg">
        {title}
      </h3>
    </div>
  );
}

export default CategoryCard;