import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface ITableParams {
  sort: Record<string, string>;
  filter: Record<string, string>;
  page: {
    limit: number;
    offset: number;
  };
};

export const TableParams = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    const tableParams = {
      sort: request.query.sort ? JSON.parse(request.query.sort) : {},
      filter: request.query.filter ? JSON.parse(request.query.filter) : {},
      page: request.query.page ? JSON.parse(request.query.page) : { limit: 10, offset: 0 }
    }

    return tableParams;
  },
);

