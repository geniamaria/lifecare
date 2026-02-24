"use client";

import Link from "next/link";
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold text-blue-600">
          <Link href="/">LifeCare</Link>
        </h1>

        <nav className="space-x-6 hidden md:flex">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/#sobre-nos" className="hover:text-blue-600">Sobre Nós</Link>
          <Link href="/#formacao" className="hover:text-blue-600">Formação</Link>
          <Link href="/#noticias" className="hover:text-blue-600">Notícias</Link>
          <Link href="/farmacia" className="hover:text-blue-600">Farmácia</Link>
          <Link href="/#produtos" className="hover:text-blue-600">Produtos</Link>
          <Link href="/#area-de-especializacao" className="hover:text-blue-600">Área de Especialização</Link>
          <Link href="/#contato" className="hover:text-blue-600">Contato</Link>
          <Link href="/#pesquisa" className="hover:text-blue-600">
            <MagnifyingGlass size={24} />
          </Link>
        </nav>
      </div>
    </header>
  );
}