import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorRegistroComponent } from './productor-registro.component';

describe('ProductorRegistroComponent', () => {
  let component: ProductorRegistroComponent;
  let fixture: ComponentFixture<ProductorRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductorRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
