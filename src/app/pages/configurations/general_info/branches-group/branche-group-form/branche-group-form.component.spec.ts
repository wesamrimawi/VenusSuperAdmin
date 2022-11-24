import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrancheGroupFormComponent } from './branche-group-form.component';

describe('BrancheGroupFormComponent', () => {
  let component: BrancheGroupFormComponent;
  let fixture: ComponentFixture<BrancheGroupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrancheGroupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrancheGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
