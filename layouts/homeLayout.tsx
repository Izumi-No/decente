export default function HomeLayout() {
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-col justify-center items-center bg-[#efefef]">
        <div className="flex flex-col justify-center items-center ">
          <h1>Nossas soluções</h1>
          <p>Software</p>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <div>
              <h2>
                BioHub é um sistema de gestão de controle biológico de precisão
              </h2>
              <p>
                É uma plataforma de nuvem integrada que auxilia toda a cadeia de
                controle biológico a monitorar pragas, liberar com precisão,
                gerar relatórios e monitorar a tomada de decisões...
              </p>
            </div>
            <div className="flex flex-col">
              <h2>Destaques</h2>
              <div className="flex justify-between">
                <div className="flex"></div>

                <button>Saiba mais</button>
              </div>
            </div>
          </div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#1d4f90]">
        <div className="flex">
          <div></div>
          <div></div>
        </div>
        <div className="flex">
          <h2></h2>
          <button>
            <span>BioHUB + BioMAPS</span>{" "}
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#efefef]"></div>
      <div className="flex flex-col justify-center items-center bg-[#1d4f90]"></div>
      <div className="flex flex-col justify-center items-center bg-[#efefef]"></div>
      <div className="flex flex-col justify-center items-center bg-[#1d4f90]"></div>
      <div className="flex flex-col justify-center items-center bg-[#efefef]"></div>
      <div className="flex flex-col justify-center items-center bg-[#1d4f90]"></div>
    </div>
  );
}
