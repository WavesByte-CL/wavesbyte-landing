"use client";

import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      {/* Sección Principal */}
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="tracking-tight font-semibold text-2xl sm:text-3xl lg:text-5xl">
          NUEVO TAXÍMETRO DE WAVESBYTE&nbsp;
        </h1>
        <h1 className="tracking-tight font-semibold from-[#FF1CF7] to-[#b249f8] text-2xl sm:text-3xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">
          CIBTRON WB-001&nbsp;
        </h1>
        <Button
          className="mt-5 relative p-[3px] rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 max-w-xs md:max-w-lg mx-auto"
          onClick={() => router.push("/reserva")}
        >
          {/* Borde Animado */}
          <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 rounded-full animate-gradient-move"></span>

          {/* Fondo Interno */}
          <span className="absolute inset-[3px] bg-black rounded-full"></span>

          {/* Contenido del Botón */}
          <span className="relative text-white font-semibold text-sm md:text-base lg:text-lg px-4 py-3 text-center">
            <span className="block md:hidden">Reservar Taxímetro Cibtron WB-001</span>
            <span className="hidden md:block">
              Click aquí para reservar Taxímetro Cibtron WB-001
            </span>
          </span>
        </Button>
      </div>

      {/* Sección de Cards */}
      <div
        className="relative max-w-[2200px] mx-auto px-4 py-12 grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Card 1 */}
        <Card className="h-auto sm:h-[400px] lg:h-[500px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-sm sm:text-tiny text-white/60 uppercase font-bold">
              Pantalla Con Color Personalizable
            </p>
            <h4 className="text-white font-medium text-lg sm:text-large">
              Pantalla LED 3.2 pulgadas
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-contain sm:object-cover"
            src="/taximetro2.png"
          />
        </Card>

        {/* Card 2 */}
        <Card className="h-auto sm:h-[400px] lg:h-[500px]">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-sm sm:text-tiny text-white/60 uppercase font-bold">
              Nuevo Taxímetro Cibtron WB-001
            </p>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full object-contain sm:object-cover"
            src="/taximetro.png"
          />
          <CardFooter className="absolute bg-white/60 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-sm sm:text-tiny text-black">
                Disponible para reservar:
              </p>
            </div>
            <Button
              className="text-sm sm:text-tiny"
              color="primary"
              radius="full"
              size="sm"
              onClick={() => router.push("/reserva")}
            >
              Reserva Ahora
            </Button>
          </CardFooter>
        </Card>

        {/* Card 3 */}
        <Card className="h-[300px] sm:h-[300px] lg:h-[400px] col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-sm sm:text-tiny text-white/60 uppercase font-bold">
              Cumplimiento Normativo
            </p>
            <h4 className="text-white/90 font-medium text-base sm:text-xl text-left">
              Aprobado por el MTT
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-contain sm:object-cover filter brightness-50"
            src="/fiscalizacion.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="MTT Icon"
                className="w-12 h-12 sm:w-12 sm:h-12"
                src="/mtt.jpg"
              />
              <div className="flex flex-col">
                <p className="text-sm sm:text-tiny text-white/60 text-left">
                  Ministerio de Transportes y Telecomunicaciones
                </p>
                <p className="text-sm sm:text-tiny text-white/60 text-left">
                  Cumple con todas las normativas vigentes hasta el 2029.
                </p>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>

      <WhatsAppButton />
    </div>
  );
}
