import "./style.css"


function Atualizacao(props) {
    return (
        <div className="MainAtualizacao">
            <div className="MainImg">
                <img className="Image" src="./images/ValorantAgente14.jpg" />
            </div>
            <div className="MainTexto">
                <h2 className="TextoTitulo">Nova atualização Valorant</h2>
                <p className="TextoParagrafo">Yoru, nativo do Japão, abre buracos na realidade para se infiltrar nas linhas inimigas invisíveis.
                    Usando engano e agressão em medidas iguais, ele atinge cada alvo antes que eles saibam para onde olhar.
                </p>
                <a href="/pagecards" className="SaibaMais">-- Saiba Mais --</a>
            </div>
        </div>
    );
}

/*#ff4654 #101823*/

export default Atualizacao;