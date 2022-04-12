/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateCtrlArgs } from "./CreateCtrlArgs";
import { UpdateCtrlArgs } from "./UpdateCtrlArgs";
import { DeleteCtrlArgs } from "./DeleteCtrlArgs";
import { CtrlFindManyArgs } from "./CtrlFindManyArgs";
import { CtrlFindUniqueArgs } from "./CtrlFindUniqueArgs";
import { Ctrl } from "./Ctrl";
import { CtrlService } from "../ctrl.service";

@graphql.Resolver(() => Ctrl)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CtrlResolverBase {
  constructor(
    protected readonly service: CtrlService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Ctrl",
    action: "read",
    possession: "any",
  })
  async _ctrlsMeta(
    @graphql.Args() args: CtrlFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Ctrl])
  @nestAccessControl.UseRoles({
    resource: "Ctrl",
    action: "read",
    possession: "any",
  })
  async ctrls(
    @graphql.Args() args: CtrlFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Ctrl[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Ctrl",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Ctrl, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Ctrl",
    action: "read",
    possession: "own",
  })
  async ctrl(
    @graphql.Args() args: CtrlFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Ctrl | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Ctrl",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Ctrl)
  @nestAccessControl.UseRoles({
    resource: "Ctrl",
    action: "create",
    possession: "any",
  })
  async createCtrl(
    @graphql.Args() args: CreateCtrlArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Ctrl> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Ctrl",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Ctrl"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Ctrl)
  @nestAccessControl.UseRoles({
    resource: "Ctrl",
    action: "update",
    possession: "any",
  })
  async updateCtrl(
    @graphql.Args() args: UpdateCtrlArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Ctrl | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Ctrl",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Ctrl"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Ctrl)
  @nestAccessControl.UseRoles({
    resource: "Ctrl",
    action: "delete",
    possession: "any",
  })
  async deleteCtrl(@graphql.Args() args: DeleteCtrlArgs): Promise<Ctrl | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
