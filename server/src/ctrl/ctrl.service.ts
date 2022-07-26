import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CtrlServiceBase } from "./base/ctrl.service.base";

@Injectable()
export class CtrlService extends CtrlServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
