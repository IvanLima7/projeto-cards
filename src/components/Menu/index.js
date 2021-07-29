import "../Menu/style.css"

function Menu(props) {
    return (
        <div className="MainMenu">
            <div className="DivValorante">
            <img className="DivImage" src="./images/NovoLogo.png"/>
            <a href="#" className="DivTexto">Valorante</a>
            </div>
            <div className="DivPages">
                <a href="#" className="DivTexto">Sobre o Jogo</a>
                <a href="#" className="DivTexto">Personagens</a>
            </div>

        </div>
    );
}

/*#ff4654 #101823*/

export default Menu;