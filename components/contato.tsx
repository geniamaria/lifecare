"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contato() {
  return (
    <section id="contato" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-blue-500 text-center mb-12">
          Entre em Contato
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* FORMULÁRIO */}
          <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Seu Nome"
                className="border-blue-300 focus:border-blue-500 focus:ring-blue-500"
              />

              <Input
                placeholder="Seu Email"
                type="email"
                className="border-blue-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <Textarea
              placeholder="Sua Mensagem"
              className="border-blue-300 focus:border-blue-500 focus:ring-blue-500 min-h-[150px]"
            />

           <div className="flex justify-end">
            <Button className="w-[180px] max-w-full bg-blue-500 hover:bg-blue-600 text-white transition duration-300">
              Enviar Mensagem
               </Button>
          </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps?q=-25.965353,32.573174&hl=pt&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}