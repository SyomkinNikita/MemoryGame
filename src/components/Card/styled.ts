import styled from "styled-components";

const CardWithLetter = styled.div`
  font-size: 36px;
  line-height: 28px;
`;

const Container = styled.div`
  display: inline-block;
  width: 150px;
  height: 150px;
  /*   border: 1px solid #CCC; */
  margin: 10px;
  perspective: 600px;
`;

const FlipCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transform-style: preserve-3d;
  transform-origin: center right;
  transition: transform 1s;
  background-color: aliceblue;
`;

const FlipCardInner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  backface-visibility: hidden;
`;

const FlipCardBack = styled.div`
  background: slateblue;
  transform: rotateY(180deg);
`;

const FlipCardFront = styled.div`
  background: crimson;
`;

const IsFlipped = styled.div`
  transform: translateX(-100%) rotateY(-180deg);
`;

export const Styled = {
  Container,
  CardWithLetter,
  FlipCard,
  FlipCardInner,
  FlipCardBack,
  FlipCardFront,
  IsFlipped,
};
