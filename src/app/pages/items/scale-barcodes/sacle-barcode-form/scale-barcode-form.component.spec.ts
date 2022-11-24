import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleBarcodeFormComponent } from './scale-barcode-form.component';

describe('ScaleBarcodeFormComponent', () => {
  let component: ScaleBarcodeFormComponent;
  let fixture: ComponentFixture<ScaleBarcodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScaleBarcodeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleBarcodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
