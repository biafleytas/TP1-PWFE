import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionAgregarComponent } from './presentacion-agregar.component';

describe('PresentacionAgregarComponent', () => {
  let component: PresentacionAgregarComponent;
  let fixture: ComponentFixture<PresentacionAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentacionAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentacionAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
