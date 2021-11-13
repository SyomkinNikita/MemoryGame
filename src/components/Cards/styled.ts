import styled from "styled-components";

const ContainerCard = styled.div`
  height: 200px;
  width: 100px;

  margin: 10px;

  background-color: darkgray;
`

const CardWithLetter = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  font-size: 36px;
  line-height: 28px;  
`

export const Styled = {
  ContainerCard,
  CardWithLetter
}