import styled from "styled-components";


/*
  opacity: ${({ transition }) => (transition ? 1 : 0.5)}; 
*/

type TTransitionBackground = {
  transition: boolean;
}

const ContainerCard = styled.div<TTransitionBackground>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100px;

  margin: 10px;
  background-color: darkblue;

  &:active {
    animation-name: move;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

  @keyframes move {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(180deg);
    }
  }
`

const CardWithLetter = styled.div`
  font-size: 36px;
  line-height: 28px;  
`

export const Styled = {
  ContainerCard,
  CardWithLetter
}