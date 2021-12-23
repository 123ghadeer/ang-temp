import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecatgoryComponent } from './createcatgory.component';

describe('CreatecatgoryComponent', () => {
  let component: CreatecatgoryComponent;
  let fixture: ComponentFixture<CreatecatgoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecatgoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecatgoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
