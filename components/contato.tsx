"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contato() {
  return (
    <section id="contato" className="py-20 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-400 text-center mb-12">
          Entre em Contato
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white p-8  space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Seu Nome"
                className="border-blue-300 focus:border-blue-400 focus:ring-blue-400"
              />

              <Input
                placeholder="Seu Email"
                className="border-blue-300 focus:border-blue-400 focus:ring-blue-400"
              />
            </div>

            <div className="relative">
              <Textarea
                placeholder="Sua Mensagem"
                className="border-blue-300 focus:border-blue-400 focus:ring-blue-400 pr-24 min-h-[120px]"
              />

              <Button className="absolute bottom-3 right-3 bg-blue-400 hover:bg-blue-500 text-white">
                Enviar
              </Button>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md h-[240px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.515052779179!2d32.573174!3d-25.965353"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
