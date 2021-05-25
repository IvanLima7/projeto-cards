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
  background: #6495ED;
  color: white;

  :hover {
    width: 16vw;
    height: 9vh;
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
  a{
    height: 10vh;
    margin-top: 40px;
    text-align: center;
    font-size: 15px;
    text-decoration: none;
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

      <Button href="https://styled-components.com" target="_blank" rel="Page Styled Components"> Style Components</Button>
      
      <MainFooter>
        {
          Data.Footer.map((res) => {
            return (
              <Footer>
                <img style={{ backgroundImage: `${res.Image}` }} />
                <a href="#">{res.Texto}</a>
              </Footer>
            )
          })
        }
      </MainFooter>
    </Main>
  );
}

export default App;
