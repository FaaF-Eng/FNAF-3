export default function Home() {
  return(

    <div className="flex justify-center items-center select-none overflow-hidden">
      <div className="relative h-screen w-screen overflow-hidden bg-black z-[1]">
      {/* camada com glitch */}

        <div className="fixed ml-50 mt-20 inset-0 pointer-events-none glitch-layer z-[1] ">
          <h1 className="fixed  text-[40px] z-99">
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
          
          <div id="botões" className="flex flex flex-col justify-center items-center
          mt-100 mr-230  Z-[999]">
            <button className="text-[25px]"style={{ textShadow: "1px 2px 10px #454a0d" }}>NEW GAME</button>
            <button className="text-[25px]"style={{ textShadow: "1px 2px 10px #454a0d" }}>LOAD GAME</button>
          </div>



        </div>
        {/* conteúdo do menu */}
        <div className="relative z-10 flex justify-center items-center h-full z-[1]"></div>
      </div>

    </div>
  )
}
