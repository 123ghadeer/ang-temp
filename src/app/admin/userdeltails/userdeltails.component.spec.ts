import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdeltailsComponent } from './userdeltails.component';

describe('UserdeltailsComponent', () => {
  let component: UserdeltailsComponent;
  let fixture: ComponentFixture<UserdeltailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdeltailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdeltailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
