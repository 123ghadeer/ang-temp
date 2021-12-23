import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeSidebarComponent } from './cafe-sidebar.component';

describe('CafeSidebarComponent', () => {
  let component: CafeSidebarComponent;
  let fixture: ComponentFixture<CafeSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
