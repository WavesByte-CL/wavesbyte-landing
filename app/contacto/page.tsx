"use client";


import WhatsAppButton from "@/components/WhatsAppButton";
import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          {/* Títulos principales */}
          <h1 className="tracking-tight font-semibold text-3xl sm:text-3xl lg:text-5xl">
            CONTACTO&nbsp;
          </h1>
          <h1 className="tracking-tight font-semibold from-[#FF1CF7] to-[#b249f8] text-3xl sm:text-3xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">
            WAVESBYTE&nbsp;
          </h1>
          <p className="text-lg mt-4 mb-8">
            Puedes contactarnos por llamada o WhatsApp al número:
          </p>

          {/* Números de teléfono */}
          <div className="space-y-4">
            <div>
            </div>
            <div>
              <a
                href="tel:+56985078891"
                className="hover:underline tracking-tight font-semibold text-xl sm:text-2xl lg:text-3xl"
              >
                +56 9 8507 8891
              </a>
              <h2>(Llamadas y WhatsApp)</h2>
            </div>

            <div>
              <a
                href="tel:+56929641632"
                className="hover:underline tracking-tight font-semibold text-xl sm:text-2xl lg:text-3xl"
              >
                +56 9 2964 1632
              </a>
              <h2>(Sólo WhatsApp)</h2>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Page;
