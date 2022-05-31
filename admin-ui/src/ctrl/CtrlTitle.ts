import { Ctrl as TCtrl } from "../api/ctrl/Ctrl";

export const CTRL_TITLE_FIELD = "test_1";

export const CtrlTitle = (record: TCtrl): string => {
  return record.test_1 || record.id;
};
