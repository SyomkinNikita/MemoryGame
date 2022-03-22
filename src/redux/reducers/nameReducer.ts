import { NameActions } from "../actions/nameActions";
import { TJsonGame } from "@localTypes/common";
import { game } from "@utils/game.json";

type TInitialGameProps = {
  game: TJsonGame[];
};

const initialState: TInitialGameProps = {
  game,
};

export const nameReducer = (
  state: TInitialGameProps = initialState,
  action: NameActions
) => {
  switch (action.type) {
    case "SET_STATE":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
