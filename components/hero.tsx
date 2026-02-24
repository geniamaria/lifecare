import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full h-[500px]">
      
      <Image
        src="/saude_fotp.avif"
        alt="Equipamentos médicos"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex h-full px-6">
        
        <div className="bg-white/90 text-sky-500 p-4 rounded-lg shadow-lg max-w-xs self-center">
          <h2 className="text-xl md:text-2xl font-bold text-left">
            Pela a Saúde e Bem-Estar em Moçambique
          </h2>
        </div>

        <div className="flex-1" /> 
      </div>
    </section>
  )
}