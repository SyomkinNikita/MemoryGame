import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: row;     
  justify-content: center; 
  align-items: center;

  height: 100vw;     
`

const ContainerBoard = styled.div`
  display:inline-block;
  
  width:200px;
  height:200px;
`

const Circle = styled.div`
  width: 200px;
  height: 200px;

  border-radius: 50%;
  border-left: 5px solid blue;
`

export const Styled = {
  Container,
  ContainerBoard,
  Circle
}