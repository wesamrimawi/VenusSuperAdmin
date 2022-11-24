import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestsComponent } from './purchase-requests.component';

describe('PurchaseRequestsComponent', () => {
  let component: PurchaseRequestsComponent;
  let fixture: ComponentFixture<PurchaseRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
