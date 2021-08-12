import "../Footers/style.css";

function Footers(props) {
  return (
    <div className="MainFooter">
      <div className="FooterLeft">
      <p className="ParagrafoFooter">Acesse tambem nossas redes sociais e descubra quem somos. </p>
        <ul>
          <li><a href="https://www.facebook.com" target="_blank"><img  src="./images/facebook.png"></img></a></li>
          <li><a href="https://www.instagram.com" target="_blank"><img  src="./images/instagram.png"></img></a></li>
          <li><a href="https://www.discord.com" target="_blank"><img  src="./images/discordia.png"></img></a></li>
        </ul>
        <p className="ParagrafoFooter"> Criado e desenvolvido por @ Ivan Lima Produções </p>
      </div>
      <div className="FooterRight">
        <img className="ImgFooter" src="./images/NovoLogo.png" />
        <a href="https://playvalorant.com" target="_blank" className="TextoFooter">Valorant é o novo jogo FPS da Riot Games,
          a mesma desenvolvedora do League of Legends (LoL).</a>
      </div>
    </div>
  );
}

/*#ff4654 #101823*/

export default Footers;