import { Component, Input, OnInit } from '@angular/core';
import { Ipassenger } from '../../model/passenger';
import { passengerservice } from '../../services/passenger.service';

@Component({
  selector: 'app-pass-card1',
  templateUrl: './pass-card1.component.html',
  styleUrls: ['./pass-card1.component.scss']
})
export class PassCard1Component implements OnInit {
  @Input() passObj !: Ipassenger;

  isEditable : boolean = false;


  constructor(private _passengerservice : passengerservice) { }

  ngOnInit(): void {
  }

  onEdit(){
    this.isEditable = !this.isEditable;
  }

  onDone(name : string){
    console.log(name)   
    this.isEditable = !this.isEditable;
    this._passengerservice.updatepassenger(this.passObj.id,name)
  }

  onRemove(){
    this._passengerservice.removepassenger(this.passObj.id);
  }
}
