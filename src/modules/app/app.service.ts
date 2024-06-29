import { Injectable } from '@nestjs/common';
import { AppTemplates } from './app.templates';
import { ITableParams } from 'src/common/decorators/table-params.decorator';

@Injectable()
export class AppService {
  constructor(private appTemplates: AppTemplates) {}

  private static data = [
      {
        name: 'Jan',
        age: 30,
        city: 'Kraków',
      },
      {
        name: 'Anna',
        age: 25,
        city: 'Warszawa',
      },
      {
        name: 'Krzysztof',
        age: 40,
        city: 'Wrocław',
      },
      {
        name: 'Marta',
        age: 22,
        city: 'Gdańsk',
      },
      {
        name: 'Piotr',
        age: 35,
        city: 'Poznań',
      },
    ];

  getTable(tableParams: ITableParams) {
    const sortedData = AppService.data.toSorted((a, b) => {
      for (const key in tableParams.sort) {
        if (tableParams.sort[key] === 'asc') {
          return a[key] > b[key] ? 1 : -1;
        } else {
          return a[key] < b[key] ? 1 : -1;
        }
      }
    });

    return this.appTemplates.getTable(sortedData, tableParams);
  }

  getTableWithLayout(tableParams: ITableParams) {
    const sortedData = AppService.data.toSorted((a, b) => {
      for (const key in tableParams.sort) {
        if (tableParams.sort[key] === 'asc') {
          return a[key] > b[key] ? 1 : -1;
        } else {
          return a[key] < b[key] ? 1 : -1;
        }
      }
    });

    return this.appTemplates.getTableWithLayout(sortedData, tableParams);
  }
}

