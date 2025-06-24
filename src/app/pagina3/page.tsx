'use client'

import { useEffect, useState } from 'react';

export default function Page3() {
  useEffect(() => {
    // exemplo: parando um áudio que estava tocando
    const isSomAtivo = localStorage.getItem("somAtivo");
    if (isSomAtivo === "true") {
      const audio = new Audio("/sounds/menu_music.mp3");
      audio.pause();
      audio.currentTime = 0;
      localStorage.setItem("somAtivo", "false");
    }
  }, []);

useEffect(() => {
  if (!window.location.hash.includes('#recarregado')) {
    window.location.href = window.location.href + '#recarregado';
    window.location.reload();
  }
}, []);


  const [fade, setFade] = useState(false);

  useEffect(() => {
    const audio = new Audio("/sounds/night_sound.mp3");
    audio.loop = false;
    audio.play().catch((e) => console.warn("Erro ao tocar som:", e));

    // Espera 3 segundos e ativa o fade
    const timeout = setTimeout(() => setFade(true), 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center select-none overflow-hidden h-screen bg-black relative">
      
      {/* Texto */}
      <div className="text-[40px] text-[green] z-10" style={{ textShadow: "2px 2px 10px #454a0d" }}>
        12:00 AM<br />1º NIGHT
      </div>

      {/* Glitch */}
      <div className="glitch-overlay z-20" />

      {/* Fade para preto total */}
      {fade && <div className="absolute inset-0 z-30 fade-to-black"></div>}
    </div>
  );
}
