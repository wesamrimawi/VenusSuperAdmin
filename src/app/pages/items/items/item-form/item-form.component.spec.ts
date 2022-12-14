import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandFormComponent } from './item-form.component';

describe('BrandFormComponent', () => {
  let component: BrandFormComponent;
  let fixture: ComponentFixture<BrandFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
