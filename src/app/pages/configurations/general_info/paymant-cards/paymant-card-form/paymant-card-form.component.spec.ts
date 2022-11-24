import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymantCardFormComponent } from './paymant-card-form.component';

describe('PaymantCardFormComponent', () => {
  let component: PaymantCardFormComponent;
  let fixture: ComponentFixture<PaymantCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymantCardFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymantCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
