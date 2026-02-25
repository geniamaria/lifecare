"use client";

import React from "react";
import ProductCard from "../../components/farmacia/productCard";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
const products = Array.from({ length: 9 }).map((_, index) => ({
  id: index,
  name: "Monitor CT40",
  description:
    "Equipamento médico de alta precisão para monitoramento contínuo de sinais vitais.",
  image: "/stetoscopio.avif",
  category: "Monitorização",
}));

export default function FarmaciaPage() {
  return (
    <>
    <Navbar />
    <section className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Farmácia
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          <aside className="bg-white rounded-xl shadow-md p-6 space-y-6">
            
            <div>
              <h2 className="font-semibold text-lg text-blue-700 mb-4">
                Categorias
              </h2>

              <ul className="space-y-2 text-sm">
                {[
                  "GLUCOMETROS",
                  "Monitor CT40",
                  "CARLSEN N",
                  "Electrolyte Analyzer",
                  "Material laboratorial",
                ].map((item) => (
                  <li
                    key={item}
                    className="p-2 rounded bg-blue-400  hover:bg-blue-50 cursor-pointer transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-lg text-blue-700 mb-3">
                Pesquisar
              </h2>
              <input
                type="text"
                placeholder="Procurar..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <h2 className="font-semibold text-lg text-blue-700 mb-4">
                Categorias
              </h2>

              <ul className="space-y-2 text-sm">
                {[
                  "GLUCOMETROS",
                  "Monitor CT40",
                  "CARLSEN N",
                  "Electrolyte Analyzer",
                  "Material laboratorial",
                ].map((item) => (
                  <li
                    key={item}
                    className="p-2 rounded bg-blue-400  hover:bg-blue-50 cursor-pointer transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-lg text-blue-700 mb-4">
                Categorias
              </h2>

              <ul className="space-y-2 text-sm">
                {[
                  "GLUCOMETROS",
                  "Monitor CT40",
                  "CARLSEN N",
                  "Electrolyte Analyzer",
                  "Material laboratorial",
                ].map((item) => (
                  <li
                    key={item}
                    className="p-2 rounded bg-blue-400 hover:bg-blue-50 cursor-pointer transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </aside>

          <div className="lg:col-span-3">
          
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-gray-600">
                Mostrando produtos
              </span>

              <select className="border rounded px-3 py-2 text-sm">
                <option>Catálogo</option>
                <option>Mais Recentes</option>
                <option>Preço: Menor para Maior</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
     <Footer /> 
     </>
  );
}