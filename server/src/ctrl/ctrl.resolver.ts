import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CtrlResolverBase } from "./base/ctrl.resolver.base";
import { Ctrl } from "./base/Ctrl";
import { CtrlService } from "./ctrl.service";

@graphql.Resolver(() => Ctrl)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CtrlResolver extends CtrlResolverBase {
  constructor(
    protected readonly service: CtrlService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
