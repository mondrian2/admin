import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioEditComponent } from './exercicio-edit.component';

describe('ExercicioEditComponent', () => {
  let component: ExercicioEditComponent;
  let fixture: ComponentFixture<ExercicioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
