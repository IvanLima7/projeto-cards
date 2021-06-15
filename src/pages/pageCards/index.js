import styled from "styled-components";
import Data from '../pageCards/data.json';

const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  background: #101823;
`;

const MainCard = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: baseline;
  
  

  .Card {
    height: 50vh;
    background-size: 420px 320px;
    background-position:center;
    background-repeat:no-repeat;
    margin-left: 20px;


      :hover {
        width: 30vw;
        height: 48vh;
        transition: 0.4s;
        border-bottom: 5px solid white;
        box-shadow: rgb(0 0 0 / 40%) 4px 8px 20px 0px;
    }
  }
`;

const MainText = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-right: 20px;

  .DivText{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
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
              <div className="Card" style={{ backgroundImage: `${res.image}` }}></div>
              
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