import React from "react"
import { UsersThreeIcon, CubeIcon, HeartBreakIcon, HeadCircuitIcon } from "@phosphor-icons/react/dist/ssr"

interface Item {
  icon: React.ReactElement
  title: string
  desc: string
  paragraph: string
}

export default function Sobre() {
  const items: Item[] = [
    {
      icon: <UsersThreeIcon size={32} weight="bold" />,
      title: "Saiba quem somos",
      desc: "Estudo detalhado das necessidades hospitalares.",
      paragraph: "Colocamos o ser humano no centro de tudo."
    },
    {
      icon: <CubeIcon size={32} weight="bold" />,
      title: "Os nossos produtos",
      desc: "Instalação técnica especializada.",
      paragraph: "Garantimos que cada detalhe seja cuidadosamente executado."
    },
    {
      icon: <HeartBreakIcon size={32} weight="bold" />,
      title: "Os nossos serviços",
      desc: "Integração completa e funcional.",
      paragraph: "Conectamos tecnologia e cuidado em perfeita harmonia."
    },
    {
      icon: <HeadCircuitIcon size={32} weight="bold" />,
      title: "Fale Conosco",
      desc: "Processos certificados e seguros.",
      paragraph: "Estamos sempre disponíveis para atender suas necessidades."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <h2 className="text-2xl font-bold text-center mb-4">Por que escolher a LifeCare?</h2>
      <p className="text-center text-gray-600 mb-12">
        Nossa abordagem única combina tecnologia avançada com expertise médica para oferecer soluções eficazes e seguras.
      </p>
      <div className="container mx-auto px-6 text-center">
        <div className="grid md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="p-6  transition">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-900 rounded-lg">
                {React.cloneElement(item.icon, { color: "white" } as any)}
              </div>

              <p className="text-[10px] text-gray-400 mb-2">{item.paragraph}</p>

              <h4 className="font-semibold mb-2">{item.title}</h4>

              <div className="w-12 h-1 bg-blue-600 mx-auto mb-2 rounded-full"></div>

              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}