import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProfieComponent } from './manage-profie.component';

describe('ManageProfieComponent', () => {
  let component: ManageProfieComponent;
  let fixture: ComponentFixture<ManageProfieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageProfieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
