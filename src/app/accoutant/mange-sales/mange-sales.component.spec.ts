import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeSalesComponent } from './mange-sales.component';

describe('MangeSalesComponent', () => {
  let component: MangeSalesComponent;
  let fixture: ComponentFixture<MangeSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangeSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangeSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
