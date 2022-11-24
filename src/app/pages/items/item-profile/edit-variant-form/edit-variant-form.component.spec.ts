import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVariantFormComponent } from './edit-variant-form.component';

describe('EditVariantFormComponent', () => {
  let component: EditVariantFormComponent;
  let fixture: ComponentFixture<EditVariantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVariantFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVariantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
