import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,MainComponent
  ]
})
export class HeaderModule { }
