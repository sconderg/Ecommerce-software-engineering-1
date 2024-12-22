import { Product } from "@/app/types/product";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col h-full">
      <div className="relative w-full pt-[100%] mb-4">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="contain"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
      <h3 className="font-semibold mb-2 flex-grow line-clamp-2">
        {product.title}
      </h3>
      <p className="mb-2 text-sm text-gray-600 line-clamp-2">
        {product.description}
      </p>
      <div className="mt-auto">
        <p className="font-bold mb-2">${product.price.toFixed(2)}</p>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Rating: {product.rating.rate.toFixed(1)} ({product.rating.count})
          </div>
          <Button size="sm">Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
