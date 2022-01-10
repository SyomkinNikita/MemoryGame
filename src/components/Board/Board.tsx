import * as React from "react";
import { Cards } from "@components/Cards";
import { Styled } from "./styled";

export const Board: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.ContainerBoard>
        <Cards />
      </Styled.ContainerBoard>
    </Styled.Container>
  );
};
