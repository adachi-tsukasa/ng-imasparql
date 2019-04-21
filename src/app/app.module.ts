import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgImasparqlModule } from "ng-imasparql";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgImasparqlModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
