'use client'

import { useEffect, useRef } from 'react';

export default function Page4() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = scrollRef.current;
      if (!container) return;

      const { clientX } = e;
      const screenWidth = window.innerWidth;
      const ratio = clientX / screenWidth;

      const maxScroll = container.scrollWidth - container.clientWidth;
      container.scrollLeft = maxScroll * ratio;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="relative h-full w-full overflow-x-auto overflow-y-hidden select-none"
    >
      <div className="w-[2000px] h-full relative"> {/* conteúdo mais largo que a tela */}

        {/* Botão esquerdo */}
        <div className='absolute top-155 left-30'>
          <button className='w-70 h-10 bg-[#8d5700] text-white rounded-[6px] text-[20px] leading-none
          cursor-pointer transition-colors duration-300 hover:bg-orange-900'>
            ⏷CLICK⏷
          </button>
        </div>

        {/* Botão direito */}
        <div className='absolute top-55 left-475'>
          <button className='w-20 h-70 bg-[#00388d] text-white rounded-[6px] text-[20px] leading-none
          cursor-pointer transition-colors duration-300 hover:bg-blue-500'>
            ⏵<br /><br />CLICK<br /><br />⏵
          </button>
        </div>

        <img
          src="/sala-fnaf2.webp"
          alt="Sala de segurança"
          className="z-[1]"
        />
      </div>
    </div>
  );
}
