"use client";

import WhatsAppButton from "@/components/WhatsAppButton";
import React from "react";

const backgroundImages = {
  innovation: "https://images.pexels.com/photos/2179483/pexels-photo-2179483.jpeg?auto=compress&cs=tinysrgb&w=800", // Reemplaza con la URL del fondo para Innovación
  commitment: "https://images.pexels.com/photos/288099/pexels-photo-288099.jpeg?auto=compress&cs=tinysrgb&w=800", // Reemplaza con la URL del fondo para Compromiso
  quality: "https://images.pexels.com/photos/2110951/pexels-photo-2110951.jpeg?auto=compress&cs=tinysrgb&w=800", // Reemplaza con la URL del fondo para Calidad
};

const backgroundOpacity = 0.8;

const Page = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Títulos principales */}
        <div className="text-center mb-12">
          <h1 className="tracking-tight font-semibold text-3xl sm:text-3xl lg:text-5xl">
            SOBRE NOSOTROS&nbsp;
          </h1>
          <h1 className="tracking-tight font-semibold from-[#FF1CF7] to-[#b249f8] text-3xl sm:text-3xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">
            WAVESBYTE&nbsp;
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Conoce más sobre nuestra misión, visión y valores.
          </p>
        </div>

        {/* Sección de Misión y Visión */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Misión */}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="tracking-tight font-semibold text-3xl sm:text-3xl lg:text-4xl mb-4">
              Nuestra Misión
            </h2>
            <p className="text-lg leading-relaxed">
              En WavesByte, nuestra misión es ofrecer soluciones tecnológicas
              innovadoras, confiables y accesibles, empezando por taxímetros de
              última generación que transforman la movilidad. Buscamos mejorar la
              vida de nuestros clientes a través de productos electrónicos de alta
              calidad.
            </p>
          </div>

          {/* Visión */}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="tracking-tight font-semibold text-3xl sm:text-3xl lg:text-4xl mb-4">
              Nuestra Visión
            </h2>
            <p className="text-lg leading-relaxed">
              Aspiramos a ser líderes en tecnología y electrónica en Chile y el
              mundo, ampliando nuestra oferta hacia consultorías especializadas
              en programación y electrónica. Queremos ser reconocidos por nuestra
              innovación, calidad y compromiso con el progreso tecnológico.
            </p>
          </div>
        </div>

        {/* Sección de Valores */}
        <div className="mt-16 text-center">
          <h2 className="tracking-tight font-semibold text-3xl sm:text-3xl lg:text-4xl mb-6">
            Nuestros Valores
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Innovación */}
            <div
              className="w-full p-6 text-center relative overflow-hidden mb-6 mt-6 rounded-lg shadow-md"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, ${backgroundOpacity}), rgba(0, 0, 0, ${backgroundOpacity})), url(${backgroundImages.innovation})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="relative text-white text-2xl font-extrabold">
                Innovación
              </h2>
              <p className="relative text-white">
                Creemos en crear soluciones que marquen la diferencia en el
                mercado.
              </p>
            </div>

            {/* Compromiso */}
            <div
              className="w-full p-6 text-center relative overflow-hidden mb-6 mt-6 rounded-lg shadow-md"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, ${backgroundOpacity}), rgba(0, 0, 0, ${backgroundOpacity})), url(${backgroundImages.commitment})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="relative text-white text-2xl font-extrabold">
                Compromiso
              </h2>
              <p className="relative text-white">
                Estamos dedicados a cumplir con las expectativas de nuestros
                clientes.
              </p>
            </div>

            {/* Calidad */}
            <div
              className="w-full p-6 text-center relative overflow-hidden mb-6 mt-6 rounded-lg shadow-md"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, ${backgroundOpacity}), rgba(0, 0, 0, ${backgroundOpacity})), url(${backgroundImages.quality})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="relative text-white text-2xl font-extrabold">
                Calidad
              </h2>
              <p className="relative text-white">
                Cada producto y servicio que ofrecemos refleja nuestra
                excelencia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Page;
