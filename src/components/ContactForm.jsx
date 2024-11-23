import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactFormWithMap = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("¡Por favor completa todos los campos!");
      return;
    }
    toast.success("¡Mensaje enviado con éxito!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Formulario */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-1/2">
          <h2 className="text-2xl font-bold mb-6 text-customColor1">¡Contáctanos!</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-customColor1 focus:ring-customColor1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-customColor1 focus:ring-customColor1"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Tu mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-customColor1 focus:ring-customColor1"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-customColor1 text-white py-2 px-4 rounded-md shadow hover:bg-customColor4 transition duration-300"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

        {/* Mapa */}
        <div className="mt-12 w-full lg:w-1/2">
          <h3 className="text-xl font-semibold text-customColor3 mb-4">Nuestra Ubicación:</h3>
          <p className="mt-4 text-center text-gray-600 text-sm italic">
            "Visítanos en Dot Dager, donde el código es tu pasión y tu la pija pequeña"
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6814.006699292385!2d-64.22746890273818!3d-31.358886785517374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432993f0b65bb1d%3A0x1205f073989b4ab5!2sAmpliaci%C3%B3n%20Poeta%20Lugones%2C%20C%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses!2sbo!4v1732337077672!5m2!1ses!2sbo"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de nuestra ubicación"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormWithMap;
