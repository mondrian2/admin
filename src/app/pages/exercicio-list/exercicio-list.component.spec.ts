import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioListComponent } from './exercicio-list.component';

describe('ExercicioListComponent', () => {
  let component: ExercicioListComponent;
  let fixture: ComponentFixture<ExercicioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
