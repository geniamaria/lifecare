"use client"
import React from "react";
import { MapPinLine, Phone, EnvelopeSimple } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="text-black py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-xl font-semibold text-black mb-4">LifeCare</h2>
          <p className="text-sm leading-relaxed">
                    Nossa abordagem única combina tecnologia avançada com expertise médica para oferecer soluções eficazes e seguras.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-black mb-4">
            Links Rápidos
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer transition">
              Sobre
            </li>
            <li className="hover:text-blue-400 cursor-pointer transition">
              Serviços
            </li>
            <li className="hover:text-blue-400 cursor-pointer transition">
              Produtos
            </li>
            <li className="hover:text-blue-400 cursor-pointer transition">
              Contacto
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-black mb-4">Contacto</h2>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <MapPinLine size={20} className="text-blue-400" />
              <span>Av. Julius Nyerere, Maputo, Moçambique</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={20} className="text-blue-400" />
              <span>+258 84 000 0000</span>
            </div>

            <div className="flex items-center gap-3">
              <EnvelopeSimple size={20} className="text-blue-400" />
              <span>info@lifecare.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700 mt-10  pt-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} LifeCare. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
