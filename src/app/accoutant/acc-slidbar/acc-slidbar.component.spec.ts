import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccSlidbarComponent } from './acc-slidbar.component';

describe('AccSlidbarComponent', () => {
  let component: AccSlidbarComponent;
  let fixture: ComponentFixture<AccSlidbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccSlidbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccSlidbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
