import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleBarcodesComponent } from './scale-barcodes.component';

describe('ScaleBarcodesComponent', () => {
  let component: ScaleBarcodesComponent;
  let fixture: ComponentFixture<ScaleBarcodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScaleBarcodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleBarcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
