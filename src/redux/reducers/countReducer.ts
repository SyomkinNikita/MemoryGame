import { TCountActions } from "@redux/actions";

type TCountStateProps = {
  count: number;
};

const initialState: TCountStateProps = {
  count: 0,
};

export const countReducer = (
  state: TCountStateProps = initialState,
  action: TCountActions
) => {
  switch (action.type) {
    case "DECREMENT":
      return {
        ...state,
        count: 0,
      };
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};
