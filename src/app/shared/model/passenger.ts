
export interface Ipassenger{
    id:number;
    fullname: string;
    checkedIn: boolean;
    checkInDate: number | null;
    children: null |Array<{name:string; age:number;}>;

}


export interface Ichild{
   name: string;
   age:number;

}