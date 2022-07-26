import { Ctrl as TCtrl } from "../api/ctrl/Ctrl";

export const CTRL_TITLE_FIELD = "shimi";

export const CtrlTitle = (record: TCtrl): string => {
  return record.shimi || record.id;
};
