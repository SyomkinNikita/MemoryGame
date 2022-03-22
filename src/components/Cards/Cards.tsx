import * as React from "react";
import { useSelector } from "react-redux";
import { AppState } from "@redux/reducers";
import { Card } from "@components/Card";

export const Cards: React.FC = () => {
  const { data } = useSelector((state: AppState) => state.state);
  return (
    <React.Fragment>
      {data.map((card) => (
        <Card {...card} key={card.id} />
      ))}
    </React.Fragment>
  );
};
