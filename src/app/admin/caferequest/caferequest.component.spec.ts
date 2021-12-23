import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaferequestComponent } from './caferequest.component';

describe('CaferequestComponent', () => {
  let component: CaferequestComponent;
  let fixture: ComponentFixture<CaferequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaferequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaferequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
