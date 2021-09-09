import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoriaAgregarComponent } from './sub-categoria-agregar.component';

describe('SubCategoriaAgregarComponent', () => {
  let component: SubCategoriaAgregarComponent;
  let fixture: ComponentFixture<SubCategoriaAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoriaAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoriaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
