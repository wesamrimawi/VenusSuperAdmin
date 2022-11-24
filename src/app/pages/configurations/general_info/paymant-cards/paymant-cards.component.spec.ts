import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymantCardsComponent } from './paymant-cards.component';

describe('PaymantCardsComponent', () => {
  let component: PaymantCardsComponent;
  let fixture: ComponentFixture<PaymantCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymantCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymantCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
