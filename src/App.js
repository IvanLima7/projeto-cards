import './App.css';
import styled from "styled-components";
import Data from "./data.json"

const Main = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const MainCard = styled.div`
  width: 100%;
  height: 70vh;  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;


const Card = styled.div`
  width: 18vw;
  height: 50vh;
  border-radius: 5px;
  margin-top: 10px;
  background: #6495ED;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(0 0 0 / 30%) 4px 8px 20px 0px;
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
    height: 52vh;
    transition: 0.2s;
    border-bottom: 5px solid white;
  }
`;

const MainFooter = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.div`
  width: 50vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  

  img{
    width: 20vw;
    height: 40vh;
  }
  p{
    height: 10vh;
    margin-top: 40px;
    text-align: center;
    font-size: 15px;
    border-bottom: 1px solid white;
    color: #fff;

    :hover {
    color: red;
    border-bottom: 1px solid red;

    }
  }
`;



function App() {
  return (
    <Main>
      <MainCard>
        {
          Data.Card.map((res) => {
            return (
              <Card>
                <h1>{res.Texto}</h1>
                <p>{res.Description}</p>
              </Card>
            )
          })
        }
      </MainCard>
      <MainFooter>
        {
          Data.Footer.map((res) => {
            return (
              <Footer>
                <img style={{ backgroundImage: `${res.Image}` }} />
                <p>{res.Texto}</p>
              </Footer>
            )
          })
        }
      </MainFooter>
    </Main>
  );
}

export default App;
