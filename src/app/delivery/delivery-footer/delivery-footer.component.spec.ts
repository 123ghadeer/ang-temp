import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryFooterComponent } from './delivery-footer.component';

describe('DeliveryFooterComponent', () => {
  let component: DeliveryFooterComponent;
  let fixture: ComponentFixture<DeliveryFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
