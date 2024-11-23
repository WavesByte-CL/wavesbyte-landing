import React, { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(true);
  const whatsappNumber = "56929641632"; // Número en formato internacional sin el +
  const message =
    "Hola, quiero más información sobre el taxímetro Cibtron WB-001.";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 4000); // El popup desaparece después de 4 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-10 z-50">
      {/* Popup Profesional */}
      {showPopup && (
        <div className="absolute bottom-16 right-0 bg-white text-gray-800 text-sm rounded-lg px-4 py-2 shadow-md border border-gray-300 mb-4 w-max">
          <p className="font-medium">
            💬 ¿Tienes dudas? Contáctanos por WhatsApp.
          </p>
        </div>
      )}

      {/* Botón */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          message
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition flex items-center justify-center"
        title="Contáctanos por WhatsApp"
      >
        <img
          src="/WhatsApp.svg.webp"
          alt="WhatsApp Logo"
          className="w-8 h-8"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
