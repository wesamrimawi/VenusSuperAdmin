import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredRequisitionsComponent } from './required-requisitions.component';

describe('RequiredRequisitionsComponent', () => {
  let component: RequiredRequisitionsComponent;
  let fixture: ComponentFixture<RequiredRequisitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequiredRequisitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredRequisitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
