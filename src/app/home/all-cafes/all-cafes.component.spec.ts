import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCafesComponent } from './all-cafes.component';

describe('AllCafesComponent', () => {
  let component: AllCafesComponent;
  let fixture: ComponentFixture<AllCafesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCafesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCafesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
