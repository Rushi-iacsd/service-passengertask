import { Component, Input, OnInit } from '@angular/core';
import { Ipassenger } from '../../model/passenger';

@Component({
  selector: 'app-pass-count1',
  templateUrl: './pass-count1.component.html',
  styleUrls: ['./pass-count1.component.scss']
})
export class PassCount1Component implements OnInit {

   @Input() totalpasscount!: number;
   @Input() getcheckIncount !: number;
    

  constructor() { }

  ngOnInit(): void {
  }

}
