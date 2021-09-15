import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionModificarComponent } from './presentacion-modificar.component';

describe('PresentacionModificarComponent', () => {
  let component: PresentacionModificarComponent;
  let fixture: ComponentFixture<PresentacionModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentacionModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentacionModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
