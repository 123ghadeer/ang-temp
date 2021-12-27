import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeorderComponent } from './cafeorder.component';

describe('CafeorderComponent', () => {
  let component: CafeorderComponent;
  let fixture: ComponentFixture<CafeorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
