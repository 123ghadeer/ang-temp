import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryrequestComponent } from './deliveryrequest.component';

describe('DeliveryrequestComponent', () => {
  let component: DeliveryrequestComponent;
  let fixture: ComponentFixture<DeliveryrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
