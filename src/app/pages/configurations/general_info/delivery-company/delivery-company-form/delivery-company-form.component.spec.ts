import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryCompanyFormComponent } from './delivery-company-form.component';

describe('DeliveryCompanyFormComponent', () => {
  let component: DeliveryCompanyFormComponent;
  let fixture: ComponentFixture<DeliveryCompanyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryCompanyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryCompanyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
