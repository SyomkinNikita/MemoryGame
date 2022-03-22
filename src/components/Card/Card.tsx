import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@redux/reducers";
import { TChangeStateActions, TCountActions } from "@redux/actions";
import { TJsonGame } from "@localTypes/common";
import { Styled } from "./styled";

type CardProps = TJsonGame;

export const Card: React.FC<CardProps> = ({ id, value, state }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { count } = useSelector((state: AppState) => state.count);
  const stateDispatch = useDispatch<React.Dispatch<TChangeStateActions>>();
  const countDispatch = useDispatch<React.Dispatch<TCountActions>>();

  const changeStateClick = (id: number) => {
    stateDispatch({ type: "CHANGE_STATE", payload: id });
    countDispatch({ type: "INCREMENT" });
  };

  console.log(count);

  // const changeStateClick = (state: boolean) => {
  //   setQuantityLetterOnBoard(quantityLetterOnBoard + 1);
  //   state = !state;
  // };

  React.useEffect(() => {
    if (count === 2) {
      countDispatch({ type: "DECREMENT" });
    }
  }, [count, countDispatch]);

  React.useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    containerRef.current.style.transform =
      state && count !== 2 ? "translateX(-100%) rotateY(-180deg)" : "none";
  }, [state, count]);

  return (
    <React.Fragment>
      <Styled.Container>
        <Styled.FlipCard
          ref={containerRef}
          onClick={() => changeStateClick(id)}
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
