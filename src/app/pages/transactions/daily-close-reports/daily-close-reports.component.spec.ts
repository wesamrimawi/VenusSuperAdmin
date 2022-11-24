import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCloseReportsComponent } from './daily-close-reports.component';

describe('DailyCloseReportsComponent', () => {
  let component: DailyCloseReportsComponent;
  let fixture: ComponentFixture<DailyCloseReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyCloseReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyCloseReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
