import { AddPlanComponent } from './add-plan.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('addPlanC', () => {
  let component: AddPlanComponent;
  let fixture: ComponentFixture<AddPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
