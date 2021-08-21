import styled from "styled-components";
import ArtigoDesenvolvedor from "../../components/artigoDesenvolvedor";
import Menu from "../../components/Menu";
import Footers from "../../components/Footers";

const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #101823;
`;



function Desenvolvedor(props) {
  return (
    <Content>
      <Menu />
      <ArtigoDesenvolvedor />
      <Footers />
    </Content>
  );
}

/*#ff4654 #101823*/

export default Desenvolvedor;