import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumancaseComponent } from './humancase.component';

describe('HumancaseComponent', () => {
  let component: HumancaseComponent;
  let fixture: ComponentFixture<HumancaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumancaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumancaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
