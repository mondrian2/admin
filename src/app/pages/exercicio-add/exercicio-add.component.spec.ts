import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioAddComponent } from './exercicio-add.component';

describe('ExercicioAddComponent', () => {
  let component: ExercicioAddComponent;
  let fixture: ComponentFixture<ExercicioAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
