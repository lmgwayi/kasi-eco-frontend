import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { TradersDetailsComponent } from './traders-details/traders-details.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component: TradersDetailsComponent}
]

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    CommonModule
  ],
  bootstrap: [
    RegisterComponent,
    LoginComponent
  ]
})
export class AppRoutingModule { }
