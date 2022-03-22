export interface IChangeStateAction {
  readonly type: "CHANGE_STATE";
  payload: number;
}

export type TChangeStateActions = IChangeStateAction;
