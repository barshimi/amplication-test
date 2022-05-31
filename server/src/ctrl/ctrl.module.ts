import { Module } from "@nestjs/common";
import { CtrlModuleBase } from "./base/ctrl.module.base";
import { CtrlService } from "./ctrl.service";
import { CtrlController } from "./ctrl.controller";
import { CtrlResolver } from "./ctrl.resolver";

@Module({
  imports: [CtrlModuleBase],
  controllers: [CtrlController],
  providers: [CtrlService, CtrlResolver],
  exports: [CtrlService],
})
export class CtrlModule {}
