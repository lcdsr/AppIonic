import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabThreeComponent } from './tab-three.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TabThreeComponent', () => {
  let component: TabThreeComponent;
  let fixture: ComponentFixture<TabThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabThreeComponent ],
      schemas : [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
