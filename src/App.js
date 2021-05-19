import './App.css';
import styled from "styled-components";
import dados from "./data.json"

const Holder = styled.div`
  width: 100%;
  height: auto;
  background: #000;
`;

const Card = styled.div`
  width: 30vw;
  height: 20vh;
  border-radius: 5px;
  background: purple;
  h1{
    margin: 0;
    font-size: 30px;
    color: #fff;
  }
  p{
    font-size: 20px;
    color: #fff;
  }
`;


function App() {
  const title = "Conceitos do Styled Components"
  return (
    <Holder>
      <Card>
        <h1>{dados.title}</h1>
        <p>{dados.description}</p>
      </Card>
      <Card>
        <h1>{title}</h1>
      </Card>
    </Holder>
  );
}

export default App;
