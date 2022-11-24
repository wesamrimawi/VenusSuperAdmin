import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemQuantitiesComponent } from './item-quantities.component';

describe('ItemQuantitiesComponent', () => {
  let component: ItemQuantitiesComponent;
  let fixture: ComponentFixture<ItemQuantitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemQuantitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemQuantitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
