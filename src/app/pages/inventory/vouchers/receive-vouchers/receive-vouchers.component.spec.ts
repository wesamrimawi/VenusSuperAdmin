import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveVouchersComponent } from './receive-vouchers.component';

describe('ReceiveVouchersComponent', () => {
  let component: ReceiveVouchersComponent;
  let fixture: ComponentFixture<ReceiveVouchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveVouchersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
