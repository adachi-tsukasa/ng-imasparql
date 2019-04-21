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
    // expect query
    // PREFIX schema: <http://schema.org/>SELECT(sample(?o) as ?date) (sample(?n) as ?name) (sample(?sub) as ?s)WHERE { ?sub schema:birthDate ?o; schema:name|schema:alternateName ?n;FILTER(regex(str(?o), "04-24" )).}group by(?n)order by(?name)

    const dateColumn: SelectQuery = {
      column: "sample(?o)",
      ailas: "?date"
    };

    const nameColumn: SelectQuery = {
      column: "sample(?n)",
      ailas: "?name"
    };

    const subColumn: SelectQuery = {
      column: "sample(?sub)",
      ailas: "?s"
    };

    const groupbyQuery: GroupbyOrOrderbyQuery = {
      query: "n"
    };

    const orderbyQuery: GroupbyOrOrderbyQuery = {
      query: "name"
    };

    const selectQuery: string = this.imasparql.buildSelectQuery([
      dateColumn,
      nameColumn,
      subColumn
    ]);

    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate() + 3;
    const now =
      (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);

    const whereQuery: string = `?sub schema:birthDate ?o; schema:name|schema:alternateName ?n;`;
    const filterQuery: string = `FILTER(regex(str(?o), "` + now + `" )).}`;

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
