import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensEditComponent } from './itens-edit.component';

describe('ItensEditComponent', () => {
  let component: ItensEditComponent;
  let fixture: ComponentFixture<ItensEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItensEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
