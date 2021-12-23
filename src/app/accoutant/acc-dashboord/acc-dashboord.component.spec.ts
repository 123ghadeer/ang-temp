import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccDashboordComponent } from './acc-dashboord.component';

describe('AccDashboordComponent', () => {
  let component: AccDashboordComponent;
  let fixture: ComponentFixture<AccDashboordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccDashboordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccDashboordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
