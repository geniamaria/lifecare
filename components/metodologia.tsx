import React from "react"
import {
  ChartLineDownIcon,
  FramerLogoIcon,
  ArrowSquareDownRightIcon,
  CertificateIcon
} from "@phosphor-icons/react/dist/ssr"

interface Item {
  icon: React.ReactElement
  title: string
  bullets: string[]
}

export default function Metodologia() {
  const items: Item[] = [
    {
      icon: <ChartLineDownIcon size={28} weight="regular" />,
      title: "Análise",
      bullets: [
        "Estudo detalhado das necessidades hospitalares",
        "Identificação de pontos críticos e melhorias",
        "Coleta de dados e métricas essenciais"
      ]
    },
    {
      icon: <FramerLogoIcon size={28} weight="regular" />,
      title: "Montagem",
      bullets: [
        "Instalação técnica especializada",
        "Organização dos equipamentos e sistemas",
        "Configuração inicial para operação eficiente"
      ]
    },
    {
      icon: <ArrowSquareDownRightIcon size={28} weight="regular" />,
      title: "Implementação",
      bullets: [
        "Integração completa e funcional",
        "Testes de operação e ajustes finos",
        "Treinamento da equipe para uso correto"
      ]
    },
    {
      icon: <CertificateIcon size={28} weight="regular" />,
      title: "Qualidade",
      bullets: [
        "Processos certificados e seguros",
        "Monitoramento contínuo de performance",
        "Garantia de conformidade e padrões"
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
  
        <h3 className="text-3xl font-bold mb-12 text-left">
          Metodologia LifeCare
        </h3>

        <div className="grid md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6"
            >
        
              <div className="flex items-center gap-3 mb-4 text-blue-500">
                {React.cloneElement(item.icon, { color: "#3B82F6" } as any) }
                <h4 className="font-semibold text-blue-500">
                  {item.title}
                </h4>
              </div>

              <ul className="text-gray-600 text-sm list-disc list-inside space-y-1">
                {item.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}