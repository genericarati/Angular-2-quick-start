import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent}  from './app.component';
import {CustomerListComponent} from './customer-list.component';
import {CustomerDetailComponent} from './customer-detail.component';
import {AddressComponent} from './address.component';
import {DataService} from "./data-service";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CustomerListComponent, CustomerDetailComponent, AddressComponent], //what things are there in my app
  providers: [DataService],
  bootstrap: [AppComponent] //where do i start
})
export class AppModule {
}
