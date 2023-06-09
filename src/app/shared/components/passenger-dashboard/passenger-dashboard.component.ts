import { Component, OnInit } from '@angular/core';
import { passengerservice } from '../../services/passenger.service';
import { Ipassenger } from '../../model/passenger';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss'],
  providers : [passengerservice]
})

export class PassengerDashboardComponent implements OnInit {
  
 
  
  passengerArray : Array<Ipassenger> = []
  checkIncount !: number;
  constructor(private _passengerservice : passengerservice) { }

  ngOnInit(): void {

    console.log(this._passengerservice.passengerArray)
    this.passengerArray = this._passengerservice.getAllpassengers();
    this.checkIncount = this.passengerArray.filter(pass => pass.checkedIn === true).length;
    console.log(this.checkIncount);
  }



}
