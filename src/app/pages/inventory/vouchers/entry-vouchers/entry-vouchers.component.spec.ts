import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryVouchersComponent } from './entry-vouchers.component';

describe('EntryVouchersComponent', () => {
  let component: EntryVouchersComponent;
  let fixture: ComponentFixture<EntryVouchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryVouchersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
