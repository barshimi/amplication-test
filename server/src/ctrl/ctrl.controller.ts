import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CtrlService } from "./ctrl.service";
import { CtrlControllerBase } from "./base/ctrl.controller.base";

@swagger.ApiTags("ctrls")
@common.Controller("ctrls")
export class CtrlController extends CtrlControllerBase {
  constructor(
    protected readonly service: CtrlService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
