import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: row;     
  justify-content: center; 
  align-items: center;

  height: 100vw;     
`

const ContainerBoard = styled.div`
  width: 700px;
  height: 500px;

  border: 3px solid darkblue;
  box-shadow: 12px 12px 12px 12px rgba(122, 122, 215, .2);
`

export const Styled = {
  Container,
  ContainerBoard
}