import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchesGroupComponent } from './branches-group.component';

describe('BranchesGroupComponent', () => {
  let component: BranchesGroupComponent;
  let fixture: ComponentFixture<BranchesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchesGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
