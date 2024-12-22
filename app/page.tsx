import Hero from "./components/homepage/Hero";
import Categories from "./components/homepage/Categories";
import ProductsList from "./components/homepage/ProductsList";
import Newsletter from "./components/homepage/Newsletter";
import getCategories from "./utils/getCategories";
import getProducts from "./utils/getProducts";

export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <main className="container mx-auto px-4 py-8">
      <Hero products={products} />
      <Categories categories={categories} />
      <ProductsList products={products} />
      <Newsletter />
    </main>
  );
}
