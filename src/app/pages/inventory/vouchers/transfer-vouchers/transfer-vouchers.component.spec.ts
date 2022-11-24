import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferVouchersComponent } from './transfer-vouchers.component';

describe('TransferVouchersComponent', () => {
  let component: TransferVouchersComponent;
  let fixture: ComponentFixture<TransferVouchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferVouchersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
