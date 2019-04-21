import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface SelectQuery {
  column: string;
  ailas: string;
}

export interface GroupbyOrOrderbyQuery {
  query: string;
}

@Injectable({
  providedIn: "root"
})
export class NgImasparqlService {
  constructor(private httpClient: HttpClient) {}

  public get(
    selectQuery: string,
    whereQuery: string,
    filterQuery: string,
    groupbyQuery?: string,
    orderbyQuery?: string
  ): Promise<any> {
    if (groupbyQuery) {
      groupbyQuery = "group by" + groupbyQuery;
    }
    if (orderbyQuery) {
      orderbyQuery = "order by" + orderbyQuery;
    }

    // var Query = [
    //   "PREFIX schema: <http://schema.org/>SELECT" +
    //     selectQuery +
    //     "WHERE { " +
    //     whereQuery +
    //     filterQuery,
    //   '" )).}' + groupbyQuery + orderbyQuery
    // ];

    var Query =
      "PREFIX schema: <http://schema.org/>SELECT" +
      selectQuery +
      "WHERE { " +
      whereQuery +
      filterQuery +
      groupbyQuery +
      orderbyQuery;

    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate() + 3;
    var now =
      (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);

    var url =
      "https://sparql.crssnky.xyz/spql/imas/query?output=json&query=" +
      encodeURIComponent(Query);

    return this.httpClient.get(url).toPromise();
  }

  buildSelectQuery(selectQueries: SelectQuery[]): string {
    return selectQueries
      .map((s: SelectQuery) => {
        return "(" + s.column + " as " + s.ailas + ")";
      })
      .join(" ");
  }

  buildGroupByOrOrderByQuery(query: GroupbyOrOrderbyQuery): string {
    return "(?" + query.query + ")";
  }
}
