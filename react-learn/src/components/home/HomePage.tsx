import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

export const HomePage: React.FC = () => {
  const cardRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.from(cardRef.current, { duration: 1, y: -50, opacity: 0 });
    gsap.from(testimonialRef.current, { duration: 1, y: -50, opacity: 0, delay: 0.5 });
    gsap.from(contactRef.current, { duration: 1, y: -50, opacity: 0, delay: 1 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-gray-800 dark:text-white">
          Bienvenido a Nuestra Página
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Estamos encantados de tenerte aquí.
        </p>
      </div>

      <div ref={cardRef} className="mt-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-5 text-gray-800 dark:text-white">
          Características
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Característica 1" description="Descripción de la característica 1" />
          <FeatureCard title="Característica 2" description="Descripción de la característica 2" />
          <FeatureCard title="Característica 3" description="Descripción de la característica 3" />
        </div>
      </div>

      <div ref={testimonialRef} className="mt-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-5 text-gray-800 dark:text-white">
          Testimonios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard name="Usuario 1" testimonial="Este es un testimonio." />
          <TestimonialCard name="Usuario 2" testimonial="Este es otro testimonio." />
        </div>
      </div>

      <div ref={contactRef} className="mt-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-5 text-gray-800 dark:text-white">
          Contacto
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Si tienes alguna pregunta, no dudes en contactarnos.
        </p>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

interface TestimonialCardProps {
  name: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, testimonial }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{name}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">"{testimonial}"</p>
    </div>
  );
};
