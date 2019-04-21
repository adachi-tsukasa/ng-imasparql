import { NgModule } from '@angular/core';
import { NgImasparqlComponent } from './ng-imasparql.component';
import { SparqlComponent } from './sparql/sparql.component';
import { ImasparqlDirective } from './imasparql.directive';

@NgModule({
  declarations: [NgImasparqlComponent, SparqlComponent, ImasparqlDirective],
  imports: [
  ],
  exports: [NgImasparqlComponent]
})
export class NgImasparqlModule { }
