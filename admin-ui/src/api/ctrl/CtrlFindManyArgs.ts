import { CtrlWhereInput } from "./CtrlWhereInput";
import { CtrlOrderByInput } from "./CtrlOrderByInput";

export type CtrlFindManyArgs = {
  where?: CtrlWhereInput;
  orderBy?: Array<CtrlOrderByInput>;
  skip?: number;
  take?: number;
};
