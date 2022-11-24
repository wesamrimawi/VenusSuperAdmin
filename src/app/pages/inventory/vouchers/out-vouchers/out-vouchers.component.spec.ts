import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutVouchersComponent } from './out-vouchers.component';

describe('OutVouchersComponent', () => {
  let component: OutVouchersComponent;
  let fixture: ComponentFixture<OutVouchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutVouchersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
