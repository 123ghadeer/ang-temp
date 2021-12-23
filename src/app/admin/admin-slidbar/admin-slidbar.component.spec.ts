import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSlidbarComponent } from './admin-slidbar.component';

describe('AdminSlidbarComponent', () => {
  let component: AdminSlidbarComponent;
  let fixture: ComponentFixture<AdminSlidbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSlidbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSlidbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
