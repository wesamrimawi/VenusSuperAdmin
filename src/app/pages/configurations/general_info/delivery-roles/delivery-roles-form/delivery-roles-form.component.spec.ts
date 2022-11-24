import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryRolesFormComponent } from './delivery-roles-form.component';

describe('DeliveryRolesFormComponent', () => {
  let component: DeliveryRolesFormComponent;
  let fixture: ComponentFixture<DeliveryRolesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryRolesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryRolesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
