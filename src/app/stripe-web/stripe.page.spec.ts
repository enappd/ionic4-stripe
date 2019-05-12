import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripePage } from './stripe.page';

describe('StripePage', () => {
  let component: StripePage;
  let fixture: ComponentFixture<StripePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StripePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
