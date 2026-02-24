"use client";
import React from "react";

interface Props {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const Sidebar: React.FC<Props> = ({ categories, onSelectCategory }) => {
  return (
    <div className="w-62 bg-blue-500 text-white p-4 rounded-lg">
      <h2 className="font-bold mb-2">Categorias</h2>

      <ul className="space-y-[2px]">
        {categories.map((cat) => (
          <li
            key={cat}
            className="cursor-pointer hover:bg-blue-600 p-1 rounded"
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Pesquisar</h3>
        <input
          type="text"
          placeholder="Digite o nome..."
          className="w-full p-2 rounded text-black"
        />
      </div>
    </div>
  );
};

export default Sidebar;