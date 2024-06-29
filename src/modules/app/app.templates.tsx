import { Injectable, Logger } from '@nestjs/common';
import { e } from '@kitajs/html';
import { AuthorizedLayout } from 'src/common/components/layout.component';
import { ITableParams } from 'src/common/decorators/table-params.decorator';

@Injectable()
export class AppTemplates {
  private logger = new Logger(AppTemplates.name);

  async getTableWithLayout(
    data: { name: string; age: number; city: string }[],
    tableParams: ITableParams,
  ): Promise<string> {
    return AuthorizedLayout({
      child: await (
        <div class="overflow-auto" id="message" hx-trigger="load">
          <header>
            <h1>Użytkownicy</h1>
          </header>
          <main>{await this.getTable(data, tableParams) as 'safe'}</main>
        </div>
      ),
    });
  }

  async getTable(
    data: { name: string; age: number; city: string }[],
    tableParams: ITableParams,
  ): Promise<string> {
    const fields = {
      name: 'Imię',
      age: 'Wiek',
      city: 'Miasto',
    };

    const newSort = (field: string) => {
      return JSON.stringify({
        ...tableParams,
        sort: {
          [field]: tableParams.sort[field] === 'asc' ? 'desc' : 'asc',
        },
      });
    };

    return await (
      <table>
        <thead hx-replace-url="true">
          <tr>
            {Object.keys(fields).map((field) => (
              <th>
                {e(fields[field])}{' '}
                <button
                  class="hide-on-request w-5 h-5 p-0 m-0 border-none bg-transparent cursor-pointer"
                  hx-get="/users"
                  hx-target="#root"
                  hx-swap="outerHTML"
                  hx-vals={newSort(field)}
                  hx-indicator="[aria-busy='true']"
                >
                  <i>
                    { tableParams.sort[field] === 'asc' ?
                      <ion-icon size="small" name="chevron-up-outline"></ion-icon> :
                      <ion-icon size="small" name="chevron-down-outline"></ion-icon>
                    }
                  </i>  
                </button>
                <i aria-busy="true"></i>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              {Object.keys(row).map((key) => (
                <td safe>{row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
