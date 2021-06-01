import styled from "styled-components";
import Data from "../../data.json";

const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #101823;
`;

const MainCard = styled.div`
  width: 100%;
  height: 70vh;  
  display: flex;
  align-items: center;
  justify-content: space-around;
`;


const Card = styled.div`
  width: 18vw;
  height: 50vh;
  border-radius: 5px;
  margin-top: 10px;
  background: #ff4654;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(0 0 0 / 50%) 4px 8px 20px 0px;
  h1{
    text-align: center;
    font-size: 20px;
    color: #fff;
  }
  p{
    text-align: center;
    font-size: 15px;
    color: #fff;
  }

  :hover {
    width: 19vw;
    height: 52vh;
    transition: 0.2s;
    border-bottom: 5px solid white;
    box-shadow: rgb(0 0 0 / 40%) 4px 8px 20px 0px;
  }
`;

const Button = styled.a`
  width: 15vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 5px;
  background: #ff4654;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  
  :hover {
    width: 16vw;
    height: 9vh;
    transition: 0.2s;
    border-bottom: 5px solid white;
  }

`;


const MainFooter = styled.div`
  width: 50vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  margin-top: 20px; 

  img{
    width: 20vw;
    height: 40vh;
  }
  p{
    height: 10vh;
    margin-top: 40px;
    text-align: center;
    font-size: 15px;
    text-decoration: none;
    border-bottom: 1px solid white;
    color: #fff;

    :hover {
    color: #ff4654;
    border-bottom: 1px solid #ff4654;

    }
  }
`;

function Main(props) {
    return (
      <Content style={{background: props.background}}>
          <h1>{props.firstName}</h1>
        <MainCard>
          {
            Data.Card.map((res) => {
              return (
                <Card style={{background: props.colorCard}}>
                  <h1>{res.Texto}</h1>
                  <p>{res.Description}</p>
                </Card>
              )
            })
          }
        </MainCard>
  
        <Button href="https://styled-components.com" target="_blank" rel="Page Styled Components"> Style Components</Button>
        
        <MainFooter>
          <img src="./images/valorante.png"/>
           <p>Valorant é o novo jogo FPS da Riot Games, a mesma desenvolvedora do League of Legends (LoL). Onde só gado joga esse jogo</p>
        </MainFooter>
      </Content>
    );
  } 
  
  /*#ff4654 #101823*/
  
  export default Main;