import React from "react";
import ProductCard from "./produtosCard";
import { Product } from "../../app/types/produtos";

interface Props {
  products: Product[];
}

const ProductGrid: React.FC<Props> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;