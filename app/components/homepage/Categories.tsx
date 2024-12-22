import { Category } from "@/app/types/product";

const Categories = ({ categories }: { categories: Category[] }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Our Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 flex flex-col items-center text-center"
          >
            <h3 className="font-semibold mb-2 capitalize">{category}</h3>
            <p>Explore our {category} selection.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
