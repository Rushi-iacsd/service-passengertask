import { Component, OnInit } from '@angular/core';
import { passengerservice } from './shared/services/passenger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'services';

  constructor(private _passengerservice : passengerservice){

  }



ngOnInit(): void{
  // console.log(this._passengerservice.passengerArray)
}
}