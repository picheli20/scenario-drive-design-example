import { Component, OnInit, Input } from '@angular/core';

/**
 * @group Forms
 * @component Step 2
 * @description My component <b>description</b>
 */
@Component({
  selector: 'kf-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  @Input()
  type: 'cat' | 'dog';

  constructor() { }

  ngOnInit() {
  }

}
