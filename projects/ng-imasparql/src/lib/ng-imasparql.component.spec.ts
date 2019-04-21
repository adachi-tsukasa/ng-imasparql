import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgImasparqlComponent } from './ng-imasparql.component';

describe('NgImasparqlComponent', () => {
  let component: NgImasparqlComponent;
  let fixture: ComponentFixture<NgImasparqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgImasparqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgImasparqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
