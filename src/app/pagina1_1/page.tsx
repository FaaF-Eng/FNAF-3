'use client'

import { useCallback } from 'react'; //Para música
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';



export default function Page1_1() {





  const router = useRouter(); // ✅ Instância do roteador do Next.js
  const playSoundAndNavigate = useCallback((path: string) => {
  const audio2 = new Audio("/sounds/button.mp3");
  audio2.play();
  setTimeout(() => {
    router.push(path); // Redireciona após tocar o som
  }, 150); // Pequeno delay para o som iniciar
  }, [router]);

  

  return(

    <div className="flex justify-center items-center select-none overflow-hidden">
      <div className='relative h-screen w-screen overflow-hidden bg-black '></div>

         <div id="botões" className="fixed mt-80 mr-190 " style={{zIndex:10000}}>
        <button onClick={() => playSoundAndNavigate('/pagina2')} className="text-[25px] "   style={{ textShadow: "1px 2px 10px #454a0d" }}>▐ NEW GAME</button>
        <br></br><br></br><button onClick={() => playSoundAndNavigate('/pagina1_2')} className="text-[25px] "style={{ textShadow: "1px 2px 10px #454a0d" }}>LOAD GAME</button>
      </div>   


      <div className="relative h-screen  overflow-hidden bg-red">


      <div className="fixed ml-50 mt-20 inset-0 pointer-events-none glitch-layer  ">
      <div className="fixed">
        <img src="spring_menu.gif" alt="spring" className="ml-70 h-150 opacity-30" />
      </div>



        <h1 className="fixed  text-[40px] ">
          <p  className="text-white  font-bold"
          style={{ textShadow: "2px 2px 10px #454a0d" }}>F<br></br></p>
          <p   className="text-white  font-bold"
          style={{ textShadow: "1px 2px 10px #454a0d" }}>N<br></br></p>
          <p  className="text-white  font-bold"
          style={{ textShadow: "1px 2px 10px #454a0d" }}>A<br></br></p>
          <p   className="text-white  font-bold"
          style={{ textShadow: "1px 2px 10px #454a0d" }}>F<br></br></p>
          <p   className="text-white  font-bold"
          style={{ textShadow: "1px 2px 10px #454a0d" }}>3<br></br></p>
        </h1>
        </div>
        </div>
    </div>
  )
}
