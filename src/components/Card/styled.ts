import styled from "styled-components";


/*
  opacity: ${({ transition }) => (transition ? 1 : 0.5)}; 
*/

// type TTransitionBackground = {
//   transition: boolean;
// }

// const ContainerCard = styled.div<TTransitionBackground>`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 200px;
//   width: 100px;

//   margin: 10px;

//   &:active {
//     animation-name: move;
//     animation-duration: 2s;
//     animation-timing-function: ease-in-out;
//     animation-fill-mode: forwards;
//   }

//   @keyframes move {
//     0% {
//       transform: rotateY(0deg);
//     }
//     100% {
//       transform: rotateY(180deg);
//     }
//   }
// `

const CardWithLetter = styled.div`
  font-size: 36px;
  line-height: 28px;  
`

const Container = styled.div`
  display: inline-block;
  width: 150px;
  height: 150px;
/*   border: 1px solid #CCC; */
  margin: 10px;
  perspective: 600px;
`

const FlipCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transform-style: preserve-3d;
  transform-origin: center right;
  transition: transform 1s;
  background-color: aliceblue;

`

const FlipCardInner = styled.div`
 position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  backface-visibility: hidden;
`

const FlipCardBack = styled.div`
  background: slateblue;
  transform: rotateY(180deg);
`

const FlipCardFront = styled.div`
  background: crimson;
`

const IsFlipped = styled.div`
  transform: translateX(-100%) rotateY(-180deg);
`

export const Styled = {
  Container,
  CardWithLetter,
  FlipCard,
  FlipCardInner,
  FlipCardBack,
  FlipCardFront,
  IsFlipped
}