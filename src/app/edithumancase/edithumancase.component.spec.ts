import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithumancaseComponent } from './edithumancase.component';

describe('EdithumancaseComponent', () => {
  let component: EdithumancaseComponent;
  let fixture: ComponentFixture<EdithumancaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdithumancaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdithumancaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
