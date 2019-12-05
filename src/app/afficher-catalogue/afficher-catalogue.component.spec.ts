import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherCatalogueComponent } from './afficher-catalogue.component';

describe('AfficherCatalogueComponent', () => {
  let component: AfficherCatalogueComponent;
  let fixture: ComponentFixture<AfficherCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
