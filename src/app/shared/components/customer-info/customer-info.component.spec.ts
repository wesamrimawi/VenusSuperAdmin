import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('CustomerInfoComponent', () => {
  let component: CustomerInfoComponent;
  let fixture: ComponentFixture<CustomerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
