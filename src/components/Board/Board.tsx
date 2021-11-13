import React from "react";
import regular from '@assets/regular.svg';
import { Styled } from "./styled";

export const Board: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.ContainerBoard>
        <Styled.Circle>
          Boards
        </Styled.Circle>
      </Styled.ContainerBoard>
    </Styled.Container>
  )
}