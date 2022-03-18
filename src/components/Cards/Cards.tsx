import * as React from "react";
import { Card } from "@components/Card";
import { game } from "@utils/game.json";
import { TJsonGame } from "@localTypes/common";

export const Cards: React.FC = () => {
  const [cards, setCards] = React.useState(game);

  return (
    <React.Fragment>
      {cards.map((card) => (
        <Card {...card} key={card.id} />
      ))}
    </React.Fragment>
  );
};
