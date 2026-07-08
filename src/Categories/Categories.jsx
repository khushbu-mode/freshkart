import categoryData from "../data/categoriesData";
import CategoryCard from "./CategoryCard";

function Category() {
  return (
    <section className="max-w-7xl mx-auto px-3 mt-10">

      <h2 className="text-3xl font-bold mb-8">
        Shop by Category
      </h2>

      <div className="grid grid-cols-4 gap-6">

        {categoryData.map((item) => (
          <CategoryCard
            key={item.id}
            title={item.title}
            Icon={item.icon}
            color={item.color}
          />
        ))}

      </div>

    </section>
  );
}

export default Category;