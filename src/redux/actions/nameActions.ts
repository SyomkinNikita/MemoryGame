export interface ISetNameAction {
  readonly type: "SET_STATE";
  payload: string;
}

export type NameActions = ISetNameAction;
