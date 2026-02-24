import React from "react";
import { Product } from "../../app/types/produtos";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 object-contain mb-3"
      />

      <h3 className="font-semibold text-lg text-blue-700">
        {product.name}
      </h3>

      <p className="text-sm text-gray-600 mt-2 flex-grow">
        {product.description}
      </p>

      <button className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Saber Mais
      </button>
    </div>
  );
};

export default ProductCard;