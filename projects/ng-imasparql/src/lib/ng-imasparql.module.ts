import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClientXsrfModule } from "@angular/common/http";

import { NgImasparqlComponent } from "./ng-imasparql.component";
import { SparqlComponent } from "./sparql/sparql.component";
import { ImasparqlDirective } from "./imasparql.directive";

@NgModule({
  declarations: [NgImasparqlComponent, SparqlComponent, ImasparqlDirective],
  providers: [],
  imports: [HttpClientModule, HttpClientXsrfModule.disable()],
  exports: [NgImasparqlComponent]
})
export class NgImasparqlModule {}
