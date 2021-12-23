import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverUploadComponent } from './deliver-upload.component';

describe('DeliverUploadComponent', () => {
  let component: DeliverUploadComponent;
  let fixture: ComponentFixture<DeliverUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
