import React, { useState, useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './HomePage.css'
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const box = useRef<HTMLDivElement | null>(null);
  const [t, setT] = useState<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (box.current) {
      const tween = gsap.to(box.current, {
        scrollTrigger: {
          trigger: box.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          pin: true,
        },
        x: 200,
        rotation: 360,
        duration: 1
      });
      setT(tween);
    }
  }, []);

  return (
    <main>
    <div className='bg-main'>
      <h1>GSAP & React, con TypeScript y ScrollTrigger Ejemplo</h1>
      <button onClick={() => t?.restart()}>Reiniciar</button>
      <div className="box" ref={box}>
        <p>Este es un ejemplo de contenido que puedes agregar a tu div animado.</p>
        <p>¡Mira cómo se mueve mientras te desplazas!</p>
      </div>
    </div>
    <div>
    <h1>GSAP & React, con TypeScript y ScrollTrigger Ejemplo</h1>
      <button onClick={() => t?.restart()}>Reiniciar</button>
      <div className="box" ref={box}>
        <p>Este es un ejemplo de contenido que puedes agregar a tu div animado.</p>
        <p>¡Mira cómo se mueve mientras te desplazas!</p>
      </div>
    </div>
    </main>
  );
}

export default HomePage;
