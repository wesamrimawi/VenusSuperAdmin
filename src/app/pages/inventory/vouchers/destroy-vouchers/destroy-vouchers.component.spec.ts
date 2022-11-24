import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyVouchersComponent } from './destroy-vouchers.component';

describe('DestroyVouchersComponent', () => {
  let component: DestroyVouchersComponent;
  let fixture: ComponentFixture<DestroyVouchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestroyVouchersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestroyVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
