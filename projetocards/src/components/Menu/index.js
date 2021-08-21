import "../Menu/style.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function Menu(props) {
    return (

        <div className="MainMenu">
            <div className="DivValorante">
                <img className="DivImage" src="./images/NovoLogo.png" />
                <a href="/" className="DivTexto">Valorant</a>
            </div>
            <div className="DivPages">
                <a href="/SobreJogo" className="DivTexto">Sobre o Jogo</a>
                <a href="/personagens" className="DivTexto">Personagens</a>
                <a href="/desenvolvedor" className="DivTexto">Desenvolvedores</a>
            </div>

        </div>


    );
}

/*#ff4654 #101823*/

export default Menu;