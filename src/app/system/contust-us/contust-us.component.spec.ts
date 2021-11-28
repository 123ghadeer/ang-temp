import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContustUsComponent } from './contust-us.component';

describe('ContustUsComponent', () => {
  let component: ContustUsComponent;
  let fixture: ComponentFixture<ContustUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContustUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContustUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
