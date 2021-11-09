import "./style.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function ArtigoDesenvolvedor(props) {
    return (

        <div className="Main1">
            <article className="Artigo">
                <h1 className="Titulo">Riot Games </h1>
                <p className="Paragrafo">Riot Games é uma empresa americana fundada como um estúdio de jogos independente em 2006 por Brandon "Ryze"
                    Beck e Marc "Tryndamere" Merril, em Los Angeles. Em 2015 foi comprada pela empresa chinesa Tencent.
                    A empresa anunciou o seu primeiro jogo, League of Legends: Clash of Fates, em outubro de 2008,
                    e lançou o jogo em outubro de 2009 simplesmente como League of Legends. O jogo utiliza o modelo free-to-play apoiado por microtransações,
                    no lugar de anúncios ou venda de cópias.<br />

                </p>
                <p className="Paragrafo">
                    A Riot Games já lançou e distribuiu na América Latina, Austrália, Nova Zelândia, Estados Unidos, Filipinas, Singapura, Vietnã, Malásia,
                    Tailândia, Canadá, Hong Kong, Macau, Coreia do Sul, Taiwan, China, Europa, Brasil e Indonésia. Na China, o acionista primário da Riot,
                    a Tencent, distribui o jogo online.
                </p>
            </article>

            <article className="Artigo">
                <h2 className="SubTitulo">História</h2>
                <p className="Paragrafo">
                    Em 2008, a Riot Games obteve um financiamento inicial de EUA US $ 7 milhões fornecidos por empresas de capital de risco Benchmark Capital e Firstmark Capital.
                    Em uma segunda rodada de financiamentos em 2009, a empresa obteve US $ 8 milhões Benchmark, Firstmark e tecnologia da gigante chinesa Tencent.
                    No início de 2011, a Tencent Holdings comprou uma participação majoritária na Riot Games.Embora os detalhes deste acordo nunca tenham sido divulgados,
                    a Bloomberg Businessweek e a VentureBeat estimam que a transação seja cerca de US$ 350 a US$ 400 milhões.
                </p>

                <p className="Paragrafo">
                    Os funcionários da empresa incluem veteranos de Defense of the Ancients (DotA), como o desenvolvedor de Dota Steve "Guinsoo" Feak e o fundador do fansite DotA-Allstars.
                    com Steve "Pendragon" Mescon, Supremo.A Riot Games também emprega ex-funcionários da Blizzard Entertainment. Em 12 de julho de 2013, o Business Insider classificou
                    a Riot Games em #4 na lista das 25 melhores empresas de tecnologia para se trabalhar em 2013.<br />
                </p>
                <p className="Paragrafo">
                    Marc "Tryndamere" Merrill, presidente da Riot, respondeu à perguntas da comunidade de League of Legends no Reddit em 3 de maio de 2012.
                    Em 2015, foi anunciado que a Tencent oficializou a compra da parte que faltava da empresa, tornando-se dona em sua totalidade da empresa.
                </p>

            </article>

        </div>

    );
}

/*#ff4654 #101823*/

export default ArtigoDesenvolvedor;