import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootercafeComponent } from './footercafe.component';

describe('FootercafeComponent', () => {
  let component: FootercafeComponent;
  let fixture: ComponentFixture<FootercafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootercafeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootercafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
