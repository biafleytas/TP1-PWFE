import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaModificarComponent } from './agenda-modificar.component';

describe('AgendaModificarComponent', () => {
  let component: AgendaModificarComponent;
  let fixture: ComponentFixture<AgendaModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
