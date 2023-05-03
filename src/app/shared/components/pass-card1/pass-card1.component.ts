import { Component, Input, OnInit } from '@angular/core';
import { Ipassenger } from '../../model/passenger';

@Component({
  selector: 'app-pass-card1',
  templateUrl: './pass-card1.component.html',
  styleUrls: ['./pass-card1.component.scss']
})
export class PassCard1Component implements OnInit {
  @Input() passObj !: Ipassenger;

  constructor() { }

  ngOnInit(): void {
  }

}
