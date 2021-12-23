import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeCustomerComponent } from './mange-customer.component';

describe('MangeCustomerComponent', () => {
  let component: MangeCustomerComponent;
  let fixture: ComponentFixture<MangeCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangeCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangeCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
