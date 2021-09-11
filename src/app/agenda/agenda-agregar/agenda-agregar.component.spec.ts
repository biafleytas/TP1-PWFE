import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaAgregarComponent } from './agenda-agregar.component';

describe('AgendaAgregarComponent', () => {
  let component: AgendaAgregarComponent;
  let fixture: ComponentFixture<AgendaAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
