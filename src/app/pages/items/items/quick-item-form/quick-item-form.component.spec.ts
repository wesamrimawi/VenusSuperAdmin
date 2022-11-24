import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickItemFormComponent } from './quick-item-form.component';

describe('QuickItemFormComponent', () => {
  let component: QuickItemFormComponent;
  let fixture: ComponentFixture<QuickItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
