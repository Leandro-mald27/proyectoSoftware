import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorConsultaComponent } from './productor-consulta.component';

describe('ProductorConsultaComponent', () => {
  let component: ProductorConsultaComponent;
  let fixture: ComponentFixture<ProductorConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductorConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
