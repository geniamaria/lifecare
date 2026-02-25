import Image from "next/image"

export default function Parceiros() {
  const parceiros = [
    {
      nome: "Profile Technician",
      descricao:
        "Empresa especializada em manutenção e calibração de equipamentos hospitalares.",
      logo: "/logo1.avif",
    },
    {
      nome: "Spacemedical",
      descricao:
        "Fornecedor internacional de tecnologia médica avançada para unidades hospitalares.",
      logo: "/logo2.avif",
    },
    {
      nome: "Diagnostix",
      descricao:
        "Soluções modernas para diagnóstico clínico e laboratorial.",
      logo: "/logo3.avif",
    },
    {
      nome: "Bienconcept",
      descricao:
        "Consultoria estratégica e distribuição de equipamentos médicos premium.",
      logo: "/logo4.avif",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        <h2 className="text-3xl font-bold mb-12 text-left">
          Parceiros de Negócio
        </h2>

     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {parceiros.map((parceiro, i) => (
            <div
              key={i}
              className=" p-6 flex gap-6 items-start"
            >
            
              <Image
                src={parceiro.logo}
                alt={parceiro.nome}
                width={80}
                height={80}
                className="object-contain"
              />

              {/* INFO */}
              <div>
                <h3 className="text-xl font-semibold text-blue-700">
                  {parceiro.nome}
                </h3>

                <p className="text-gray-600 mt-2 text-sm">
                  {parceiro.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}