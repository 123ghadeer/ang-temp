import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercafeComponent } from './headercafe.component';

describe('HeadercafeComponent', () => {
  let component: HeadercafeComponent;
  let fixture: ComponentFixture<HeadercafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadercafeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadercafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
