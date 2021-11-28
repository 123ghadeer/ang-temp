import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCafesComponent } from './manage-cafes.component';

describe('ManageCafesComponent', () => {
  let component: ManageCafesComponent;
  let fixture: ComponentFixture<ManageCafesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCafesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCafesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
