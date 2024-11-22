"use client";

import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import addRecordToFirestore from "../../firebase/addDoc";
import { useRouter } from "next/navigation"; // Importar useRouter
import WhatsAppButton from "@/components/WhatsAppButton";

const Page = () => {
  const router = useRouter(); // Inicializar useRouter
  const [form, setForm] = useState({
    name: "",
    phone: "",
    quantity: 1,
    email: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    quantity: false,
    email: false,
  });

  const validateName = (name: string) => /^[a-zA-Z\s]+$/.test(name);
  const validatePhone = (phone: string) => /^\d{8}$/.test(phone);
  const validateQuantity = (quantity: number) =>
    Number.isInteger(Number(quantity)) && Number(quantity) > 0;
  const validateEmail = (email: string) =>
    email === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    if (value.trim() !== "") {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  };

  const handleSubmit = async () => {
    const newErrors = {
      name: !validateName(form.name),
      phone: !validatePhone(form.phone),
      quantity: !validateQuantity(form.quantity),
      email: !validateEmail(form.email),
    };

    setErrors(newErrors);

    const isValid = !Object.values(newErrors).includes(true);

    if (!isValid) {
      let errorMessage = "Por favor completa los siguientes campos:\n";
      if (newErrors.name)
        errorMessage +=
          "- Nombre y Apellido: Solo letras y espacios permitidos.\n";
      if (newErrors.phone)
        errorMessage += "- Celular: Debe contener 8 dígitos numéricos.\n";
      if (newErrors.quantity)
        errorMessage += "- Cantidad: Debe ser un número entero positivo.\n";
      if (newErrors.email)
        errorMessage += "- Email: Debe ser un correo electrónico válido.\n";

      alert(errorMessage);
    } else {
      try {
        await addRecordToFirestore("registro", {
          name: form.name,
          phone: form.phone,
          quantity: form.quantity,
          email: form.email,
        });
        alert("Formulario enviado correctamente");

        // Limpiar el formulario
        setForm({
          name: "",
          phone: "",
          quantity: 1,
          email: "",
        });

        router.push("/");
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        alert(
          "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo."
        );
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-8 rounded-lg shadow-lg w-full ">
        <h2 className="tracking-tight font-semibold from-[#f8f8f8] to-[#ffffff] text-3xl sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b text-center">
          RESERVA TU TAXÍMETRO
        </h2>
        <h2 className="tracking-tight font-semibold from-[#FF1CF7] to-[#b249f8] text-3xl sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b text-center mb-10">
          CIBTRON WB-001
        </h2>

        <h3 className="tracking-tight font-semibold from-[#f8f8f8] to-[#ffffff] text-2xl sm:text-2xl lg:text-2xl bg-clip-text text-transparent bg-gradient-to-b text-center mb-10">
          Te avisaremos con preferencia cuando el táximetro este disponible para la compra.
        </h3>

        <Input
          isRequired
          type="text"
          label="Nombre y Apellido"
          name="name"
          placeholder="Ingresa tu nombre y apellido"
          value={form.name}
          onChange={handleInputChange}
          className={`mb-4 ${errors.name ? "border-red-500" : ""}`}
        />

        <Input
          isRequired
          type="text"
          label="Celular (+569)"
          placeholder="Ingresa tu celular 8 dígitos"
          name="phone"
          value={form.phone}
          onChange={handleInputChange}
          className={`mb-4 ${errors.phone ? "border-red-500" : ""}`}
        />

        <Input
          isRequired={false}
          type="email"
          label="Email (Opcional)"
          placeholder="Ingresa tu email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          className={`mb-4 ${errors.email ? "border-red-500" : ""}`}
        />

        <Input
          isRequired
          type="number"
          label="Cantidad"
          placeholder="Ingresa la cantidad de taxímetros a reservar"
          name="quantity"
          value={form.quantity.toString()}
          onChange={handleInputChange}
          className={`mb-6 ${errors.quantity ? "border-red-500" : ""}`}
        />

        <Button
          onPress={handleSubmit}
          color="primary"
          radius="full"
          size="lg"
          className="w-full"
        >
          Reservar
        </Button>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Page;
