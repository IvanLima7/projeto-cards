import styled from "styled-components";
import Menu from "../../components/Menu";
import Footers from "../../components/Footers";
import PageCards from "../cards";


const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #101823;
`;



function Personagens(props) {
  return (
    <Content>
      <Menu />
      <PageCards/>
      <Footers />

    </Content>
  );
}

/*#ff4654 #101823*/

export default Personagens;