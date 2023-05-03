import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PassengerDashboardComponent } from './shared/components/passenger-dashboard/passenger-dashboard.component';
import { PassCard1Component } from './shared/components/pass-card1/pass-card1.component';
import { PassCount1Component } from './shared/components/pass-count1/pass-count1.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerDashboardComponent,
    PassCard1Component,
    PassCount1Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  Title = 'services';

}