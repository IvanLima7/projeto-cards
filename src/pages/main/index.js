import styled from "styled-components";
import Menu from "../../components/Menu"
import Cards from "../../components/cards";
import Atualizacao from "../../components/atualizacao";
import Footers from "../../components/Footers";
import Banner from "../../components/banner";


const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #101823;
`;



function Main(props) {
  return (
    <Content>
      <Menu />
      <Banner/>
      <Cards />
      <Atualizacao />
      <Footers />

    </Content>
  );
}

/*#ff4654 #101823*/

export default Main;