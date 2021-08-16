import styled from "styled-components";
import Menu from "../../components/Menu";
import Footers from "../../components/Footers";
import Artigo from "../../components/artigo";

const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #101823;
`;



function SobreJogo(props) {
  return (
    <Content>
      <Menu />
      <Artigo/>
      <Footers />
    </Content>
  );
}

/*#ff4654 #101823*/

export default SobreJogo;