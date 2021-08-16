import styled from "styled-components";
import "../artigo/style.css";

const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  aling-items: center;
  background: #101823;
  margin-top: 5%;
`;


function Artigo(props) {
    return (
        <Content>
            <div className="Main">

                <article className="Artigo">
                    <h1 className="Titulo">O que é Valorant ?</h1>
                    <p className="Paragrafo">Valorant é o jogo de tiro em primeira pessoa lançado pela Riot Games, mesma produtora do MOBA League of Legends (LoL).
                        Disponível para download grátis para PC, o shooter chegou ao mercado para competir com
                        Counter-Strike: Global Offensive (CS:GO) pela preferência dos jogadores que buscam um FPS de
                        requisitos mínimos acessíveis e que rode em qualquer computador.<br />

                    </p>
                    <p className="Paragrafo">
                        Com design de mapas inteligente, conexão consistente e ampla variedade de armas e skins,
                        o game, cada vez mais relevante no cenário de esports da Twitch, é um dos nomes do momento.
                        Confira, na lista a seguir, dez fatos interessantes sobre Valorant.
                    </p>
                </article>

                <article className="Artigo">
                    <h1 className="Titulo">Principal Agente</h1>
                    <h2 className="SubTitulo">Sova</h2>
                    <p className="Paragrafo">
                        As escolhas de agentes mais escolhidos não apresentaram surpresas ou novidades
                        em comparação com os torneios dos últimos meses no VALORANT. Sova foi o personagem mais escolhido de todos.
                    </p>

                    <p className="Paragrafo">
                        O Sova é mais um dos personagens voltados para a identificação da posição dos inimigos.
                        O grande barato com ele é marcar áreas com suas flechas que mostram os inimigos e utilizar drones para também revelar a posição.
                        Ele é menos eficiente que o Cypher nessa área e suas habilidades de dano não fazem frente para a de outros agentes focados nessa área,
                        mas ainda assim é uma excelente escolha em muitas composições e uma ótima indicação para os iniciantes.
                    </p>

                    <p className="Paragrafo">
                        O agente da Rússia apareceu no servidor em 188 oportunidades ao longo de todo o Protocolo Gêneses.
                        O primeiro torneio, inclusive, foi a edição em que Sova apresentou a maior quantidade de picks,
                        em torno de 50 vezes.<br />
                    </p>

                    <h2 className="SubTitulo">Raze</h2>
                    <p className="Paragrafo">
                        A Raze tem lugar especial no coração de todos os brasileiros e dessa vez não foi diferente.
                        A baiana ficou na segunda colocação e foi escolhida em 170 vezes — apenas 10 de diferença em relação ao Sova.
                        Boa tanto na defesa quanto no ataque, ela é uma das personagens mais agressivas do jogo.
                    </p>

                    <p className="Paragrafo">
                        Com granadas, minas, lança foguetes, robôs explosivos que perseguem os adversários, esse é o arsenal da Raze, que faz o caos no campo de batalha mas causa um dano massivo aos adversários.
                    </p>

                    <p className="Paragrafo">
                        Uma pena que, nessa posição de duelista, ela contribua menos para o time e exija mais do jogador. Dentre os agentes nessa função, ela é a mais tranquila de jogar e por isso está mais alta no ranking,
                        mas ainda assim só é indicada se você realmente sabe o que está fazendo no jogo.
                    </p>

                    <h2 className="SubTitulo">Killjoy</h2>

                    <p className="Paragrafo">
                        A terceira colocação ficou para a Killjoy, que definitivamente passou a dominar a preferência na classe dos sentinelas.
                        Omen, que disputava muitas vezes a liderança com Sova, ficou apenas na quarta colocação.
                        O motivo, obviamente, é que o agente dividiu as atenções com Astra e também Viper.
                    </p>

                </article>
                <table>
                    <tbody>
                        <tr>
                            <td><strong>AGENTES</strong></td>
                            <td><strong>QUANTIDADE</strong></td>
                        </tr>
                        <tr>
                            <td>Sova</td>
                            <td>188</td>
                        </tr>
                        <tr>
                            <td>Raze</td>
                            <td>170</td>
                        </tr>
                        <tr><td>Killjoy</td>
                            <td>135</td>
                        </tr>
                        <tr>
                            <td>Jett</td>
                            <td>126</td>
                        </tr>
                        <tr>
                            <td>Omen</td>
                            <td>119</td>
                        </tr>
                    </tbody>
                </table>

                <article className="Artigo">
                    <h1 className="Titulo">Mapa Mais Jogado</h1>

                    <p className="Paragrafo">
                        Em relação aos mapas mais utilizados, a Haven ocupou a preferências das meninas.
                        O cenário famoso por apresentar três spikes sites apareceu por 31 vezes em 127 jogos disputados.<br />

                    </p>

                    <p className="Paragrafo">
                        Outro dado interessante é a presença da Icebox na última colocação. O palco de gelo foi pickado em apenas 21 oportunidades,
                        ficando atrás até da Split. Os outros três cenários da rotação foram jogados por só 25 vezes.<br />
                    </p>

                    <p className="Paragrafo">
                        Falando no retrospecto de ataque contra defesa, os cinco mapas apresentaram ao longo das semanas de competições um equilíbrio grande.
                        A maior disparidade é justamente na Haven, onde os atacantes levaram a melhor em 56% dos pontos.<br />
                    </p>
                    <p className="Paragrafo"></p>


                </article>
            </div>
        </Content>
    );
}

/*#ff4654 #101823*/

export default Artigo;