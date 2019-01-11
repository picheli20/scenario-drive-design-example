import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2Component } from './step2.component';

describe('Step2Component', () => {
  let component: Step2Component;
  let fixture: ComponentFixture<Step2Component>;

  beforeEach(async(() => {
    /**
     * @uijar Step2Component
     */
    TestBed.configureTestingModule({
      declarations: [ Step2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  /** @uijarexample Cat example */
  it('should create', () => {
    component.type = 'cat';
    expect(component).toBeTruthy();
  });

  /** @uijarexample Dog Example */
  it('should create', () => {
    component.type = 'dog';
    expect(component).toBeTruthy();
  });
});