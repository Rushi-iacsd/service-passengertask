import { Injectable } from "@angular/core";
import { Ipassenger } from "../model/passenger";
import { SnackbarService } from "./snackbar.service";


@Injectable({
    providedIn :'root'
})
export class passengerservice{

  passengerArray: Array<Ipassenger>=

    [{
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null
    }, {
        id: 2,
        fullname: 'Rose',
        checkedIn: false,
        checkInDate: null,
        children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
    }, {
        id: 3,
        fullname: 'James',
        checkedIn: true,
        checkInDate: 1491606000000,
        children: null
    }, {
        id: 4,
        fullname: 'Louise',
        checkedIn: true,
        checkInDate: 1488412800000,
        children: [{ name: 'Jessica', age: 1 }]
    }, {
        id: 5,
        fullname: 'Tina',
        checkedIn: false,
        checkInDate: null,
        children: null
    }];


  constructor(private _snackBarService : SnackbarService){}

getAllpassengers() : Array<Ipassenger> {
    return this.passengerArray;
}

  updatepassenger(id:number, updatedname : string){
    this.passengerArray.forEach(pass =>{
        if(pass.id === id){
            pass.fullname = updatedname;
        }
    })
    this._snackBarService.onOpenSnackBar(`The passenger name is changed to ${updatedname}`)
    }



    removepassenger(id:number ){
        let getIndex = this.passengerArray.findIndex(pass =>pass.id === id);
           this.passengerArray.splice(getIndex, 1)
           this._snackBarService.onOpenSnackBar(`The passenger with Id  ${id}  is removed`)
        
        }
    }

