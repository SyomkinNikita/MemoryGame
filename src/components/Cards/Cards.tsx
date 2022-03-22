import * as React from "react";
import { useSelector } from "react-redux";
import { AppState } from "@redux/reducers/rootReducer";
import { Card } from "@components/Card";
import { game } from "@utils/game.json";
import { TJsonGame } from "@localTypes/common";

export const Cards: React.FC = () => {
  // const { game } = useSelector((state: AppState) => state.state);
  return (
    <React.Fragment>
      {game.map((card) => (
        <Card {...card} key={card.id} />
      ))}
    </React.Fragment>
  );
};
