"use client"; 

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React, { useState } from "react";
import Sidebar from "../../components/farmacia/sidebar";
import ProductGrid from "../../components/farmacia/produtosgrid";
import { Product } from "../types/produtos";

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Monitor CT40",
    description:
      "Monitor multiparamétrico ideal para hospitais e clínicas.",
    image: "/stetoscopio.avif",
    category: "Monitor CT40",
  },
  {
    id: "2",
    name: "Glucometro Pro",
    description:
      "Equipamento moderno para medição de glicose no sangue.",
    image: "/stetoscopio.avif",
    category: "Glucometros",
  },
];

const categories = [
  "Glucometros",
  "Monitor CT40",
  "Caresens N",
  "Electrolyte Analyzer",
  "Profissional Care",
];

const FarmaciaPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filteredProducts = selectedCategory
    ? mockProducts.filter(
        (product) => product.category === selectedCategory
      )
    : mockProducts;

  return (
     <>
      <Navbar />
    <div className="container mx-auto py-10">
      
      <h1 className="text-3xl font-bold mb-8 text-center">
        Farmácia
      </h1>

      <div className="flex gap-8">
        <Sidebar
          categories={categories}
          onSelectCategory={setSelectedCategory}
        />

        <div className="flex-1">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
     <Footer />
     </>
  );
};

export default FarmaciaPage;