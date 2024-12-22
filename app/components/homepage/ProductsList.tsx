import { Product } from "@/app/types/product";
import ProductItem from "../product/ProductItem";

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Our Shop</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
