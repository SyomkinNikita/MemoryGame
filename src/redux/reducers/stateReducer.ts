import { TJsonGame } from "@localTypes/common";
import { TChangeStateActions } from "@redux/actions";
import { game as data } from "@utils/game.json";

type TInitialGameProps = {
  data: TJsonGame[];
};

const initialState: TInitialGameProps = {
  data,
};

export const nameReducer = (
  state: TInitialGameProps = initialState,
  action: TChangeStateActions
) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        data: state.data.map(({ id, state, value }) => {
          if (action.payload === id) {
            return { id, state: !state, value };
          }
          return { id, state, value };
        }),
        name: action.payload,
      };
    default:
      return state;
  }
};
