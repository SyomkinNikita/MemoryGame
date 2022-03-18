import * as React from "react";
import { Styled } from "./styled";

export const Card: React.FC<{
  id: number;
  value: string;
  state: boolean;
}> = ({ id, value, state }) => {
  const [quantityLetterOnBoard, setQuantityLetterOnBoard] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  // const outerBlockRef = React.useRef<HTMLDivElement>(null);

  const changeStateClick = (state: boolean) => {
    setQuantityLetterOnBoard(quantityLetterOnBoard + 1);
    state = !state;
  };

  React.useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    containerRef.current.style.transform = state
      ? "translateX(-100%) rotateY(-180deg)"
      : "";
  }, [quantityLetterOnBoard, state]);
  console.log(state);

  return (
    <React.Fragment>
      <Styled.Container>
        <Styled.FlipCard
          ref={containerRef}
          onClick={() => changeStateClick(state)}
        >
          <Styled.FlipCardInner>
            <Styled.FlipCardFront>{value}</Styled.FlipCardFront>
            <Styled.FlipCardBack></Styled.FlipCardBack>
          </Styled.FlipCardInner>
        </Styled.FlipCard>
      </Styled.Container>
    </React.Fragment>
  );
};
