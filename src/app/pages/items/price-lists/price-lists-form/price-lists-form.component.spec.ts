import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceListsFormComponent } from './price-lists-form.component';

describe('PriceListsFormComponent', () => {
  let component: PriceListsFormComponent;
  let fixture: ComponentFixture<PriceListsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceListsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceListsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
