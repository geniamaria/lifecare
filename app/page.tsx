import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Metodologia from "@/components/metodologia"
import Produtos from "@/components/produtos"
import Parceiros from "@/components/parceiros"
import Contato from "@/components/contato"
import Footer from "@/components/footer"
import Sobre from "@/components/sobre"

export default function Home() {
  return (
    <>
      <Navbar />
       <Hero />
      <Sobre />
      <Metodologia />
      <Produtos />
      <Parceiros />
      <Contato />
      <Footer />
    </>
  )
}