import { Component } from "@angular/core";

import {
  NgImasparqlService,
  SelectQuery,
  GroupbyOrOrderbyQuery
} from "ng-imasparql";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "imasparql";
  content: any;
  constructor(private imasparql: NgImasparqlService) {
    let dateColumn: SelectQuery = {
      column: "sample(?o)",
      ailas: "?date"
    };

    let nameColumn: SelectQuery = {
      column: "sample(?n)",
      ailas: "?name"
    };

    let subColumn: SelectQuery = {
      column: "sample(?sub)",
      ailas: "?s"
    };

    let groupbyQuery: GroupbyOrOrderbyQuery = {
      query: "n"
    };

    let orderbyQuery: GroupbyOrOrderbyQuery = {
      query: "name"
    };

    let selectQuery: string = this.imasparql.buildSelectQuery([
      dateColumn,
      nameColumn,
      subColumn
    ]);

    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate() + 3;
    let now =
      (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);

    let whereQuery: string = `?sub schema:birthDate ?o; schema:name|schema:alternateName ?n;`;
    let filterQuery: string = `FILTER(regex(str(?o), "` + now + `" )).}`;

    this.imasparql
      .get(
        selectQuery,
        whereQuery,
        filterQuery,
        this.imasparql.buildGroupByOrOrderByQuery(groupbyQuery),
        this.imasparql.buildGroupByOrOrderByQuery(orderbyQuery)
      )
      .then(res => {
        console.log(res);
      });
  }
}
