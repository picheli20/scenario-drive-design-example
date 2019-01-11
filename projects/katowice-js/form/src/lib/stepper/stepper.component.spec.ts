import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperComponent } from './stepper.component';

describe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;

  beforeEach(async(() => {
    /**
     * @uijar StepperComponent
     */
    TestBed.configureTestingModule({
      declarations: [ StepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /** @uijarexample Simple example */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
