import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Produtos() {
  const produtos = [
    {
      nome: "Monitor CT30",
      descricao: "Monitor multiparamétrico ideal para clínicas.",
      imagem: "/stetoscopio.avif",
    },
    {
      nome: "Monitor CT40",
      descricao: "Equipamento moderno com alta precisão.",
      imagem: "/stetoscopio.avif",
    },
    {
      nome: "Monitor CT50",
      descricao: "Tecnologia avançada para monitorização.",
      imagem: "/stetoscopio.avif",
    },
    {
      nome: "Monitor CT60",
      descricao: "Alta performance para ambientes hospitalares.",
      imagem: "/stetoscopio.avif",
    },
  ]

  return (
    <section id="produtos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">

        <h2 className="text-3xl font-bold mb-12 text-left">
          Produtos em Destaque
        </h2>

   
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {produtos.map((produto, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col  "
            >
              <Image
                src={produto.imagem}
                alt={produto.nome}
                width={100}
                height={100}
                className="object-contain mb-4 items-center"
              />

              <h3 className="text-lg font-semibold text-blue-700">
                {produto.nome}
              </h3>

              <p className="text-sm text-gray-600 mt-2 mb-4">
                {produto.descricao}
              </p>

              <Button className="bg-blue-300 hover:bg-blue-400 text-white w-[80px] items-end self-end">
                Saiba Mais
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}