import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensAddComponent } from './itens-add.component';

describe('ItensAddComponent', () => {
  let component: ItensAddComponent;
  let fixture: ComponentFixture<ItensAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItensAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
