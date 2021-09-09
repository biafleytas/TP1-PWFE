import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoriaModificarComponent } from './sub-categoria-modificar.component';

describe('SubCategoriaModificarComponent', () => {
  let component: SubCategoriaModificarComponent;
  let fixture: ComponentFixture<SubCategoriaModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoriaModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoriaModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
