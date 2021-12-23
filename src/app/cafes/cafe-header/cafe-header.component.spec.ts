import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeHeaderComponent } from './cafe-header.component';

describe('CafeHeaderComponent', () => {
  let component: CafeHeaderComponent;
  let fixture: ComponentFixture<CafeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
