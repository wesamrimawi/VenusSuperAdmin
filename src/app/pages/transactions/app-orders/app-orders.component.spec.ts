import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOrdersComponent } from './app-orders.component';

describe('AppOrdersComponent', () => {
  let component: AppOrdersComponent;
  let fixture: ComponentFixture<AppOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
