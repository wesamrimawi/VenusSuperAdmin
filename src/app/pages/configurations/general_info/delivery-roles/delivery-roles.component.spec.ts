import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryRolesComponent } from './delivery-roles.component';

describe('DeliveryRolesComponent', () => {
  let component: DeliveryRolesComponent;
  let fixture: ComponentFixture<DeliveryRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
