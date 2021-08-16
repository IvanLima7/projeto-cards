import styled from "styled-components";
import Data from './data.json';

const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: roww;
  justify-content: center;
  aling-items: center;
  background: #101823;
  margin-top: 5%;
`;

const MainCard = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;


  .CardPage {
    width: 80%;
    height: 65vh;
    background-size: contain;
    background-position:center;
    background-repeat:no-repeat;
  }
`;

const MainText = styled.div`
  width: 45%;
  height: auto;
  display: flex;
  flex-direction: column;

  .DivText{
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
  }

  .TextoCard {
    text-align: left;
    font-size: 15px;
    color: #fff;
  }
`;

/*flex-wrap: wrap;*/


function PageCards(props) {
  return (
    <Content>
      <MainCard>
        {
          Data.Card.map((res) => {
            return (
              <div className="CardPage" style={{ backgroundImage: `${res.image}` }}></div>
              )
            })
          }
      </MainCard>
      <MainText>
        {
          Data.Card.map((res) => {
            return (
              <div className="DivText">
                <h1 className="TituloCard">{res.Texto}</h1>
                <p className="TextoCard" >{res.Description}</p>
              </div>
            )
          })
        }
      </MainText>
    </Content>

  );
}

/*#ff4654 #101823*/

export default PageCards;