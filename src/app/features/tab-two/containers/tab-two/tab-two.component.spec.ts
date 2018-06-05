import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTwoComponent } from './tab-two.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TabTwoComponent', () => {
  let component: TabTwoComponent;
  let fixture: ComponentFixture<TabTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabTwoComponent ],
      schemas : [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
