import { Button } from "@/components/ui/button";
import ProductItem from "../product/ProductItem";
import { Product } from "@/app/types/product";

const Hero = ({ products }: { products: Product[] }) => {
  return (
    <>
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-primary/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Mega Savings Event</h2>
          <p className="text-xl mb-4">Up to 50% Off!</p>
          <Button>Shop now!</Button>
        </div>
        <div className="bg-secondary/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Mega Sale Extravaganza</h2>
          <p className="text-xl mb-4">Up to 70% Off!</p>
          <Button>Shop now!</Button>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Deals of the Day</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.slice(0, 6).map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
