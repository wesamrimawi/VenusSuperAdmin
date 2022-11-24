import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldRequisitionsComponent } from './hold-requisitions.component';

describe('HoldRequisitionsComponent', () => {
  let component: HoldRequisitionsComponent;
  let fixture: ComponentFixture<HoldRequisitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoldRequisitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldRequisitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
