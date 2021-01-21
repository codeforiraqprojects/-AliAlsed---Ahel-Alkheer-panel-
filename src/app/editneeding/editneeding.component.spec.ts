import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditneedingComponent } from './editneeding.component';

describe('EditneedingComponent', () => {
  let component: EditneedingComponent;
  let fixture: ComponentFixture<EditneedingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditneedingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditneedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
