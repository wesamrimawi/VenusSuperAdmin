import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRefundsComponent } from './purchase-refunds.component';

describe('PurchaseRefundsComponent', () => {
  let component: PurchaseRefundsComponent;
  let fixture: ComponentFixture<PurchaseRefundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseRefundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRefundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
