import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesFormComponent } from './attributes-form.component';

describe('AttributesFormComponent', () => {
  let component: AttributesFormComponent;
  let fixture: ComponentFixture<AttributesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
