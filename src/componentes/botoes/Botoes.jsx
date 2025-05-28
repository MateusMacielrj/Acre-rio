import ImagemWhatsapp from "../imagens/zap-animado.gif";
import ImagemMapa from "../imagens/localizacao_transparente.gif";
import ImagemInsta from "../imagens/instagram.gif";
import ImagemFace from "../imagens/facebook.gif";
import ImagemLogo from "../imagens/logo _mtf_transparente.png"


function Botoes() {
  return (
    <div className="btn-contatos">
      <button
        onClick={() => {
          window.open(
            "https://api.whatsapp.com/send?phone=5522999204321&text=Ol%C3%A1%2C%20gostaria%20de%20ser%20atendido.%20",
            "_blank"
          );
        }}
      >
        <img src={ImagemWhatsapp} alt="WhatsApp" />
        Atendimento on-line
      </button>

      <button
        onClick={() => {
          window.open("https://www.instagram.com/acrerio.oficial/");
        }}
      >
        <img src={ImagemInsta} alt="" />
        Instagram
      </button>

      <button
        onClick={() => {
          window.open("https://www.facebook.com/acrerio.oficial/?locale=pt_BR");
        }}
      >
        <img src={ImagemFace} alt="" />
        Facebook
      </button>

      <button
        onClick={() => {
          window.open(
            "https://www.google.com/maps/dir//Av.+Joaquim+Nogueira,+998+-+S%C3%A3o+Crist%C3%B3v%C3%A3o,+Cabo+Frio+-+RJ,+28909-490/@-22.8894219,-42.1273368,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x971adbc1c407a9:0x2ee68df2bbf7e144!2m2!1d-42.0449352!2d-22.8894431?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
          );
        }}
      >
        <img src={ImagemMapa} alt="" />
        Onde estamos
      </button>

      
      <p className="rodape-acre-rio">Acre Rio © 2025 </p>

    <a href="https://www.instagram.com/mtf_dev/" target="_blank" rel="noopener noreferrer">
        <img className="logo_mtf" src={ImagemLogo} alt="Logo MTF" />
      </a>

    </div>
  );
}

export default Botoes;
