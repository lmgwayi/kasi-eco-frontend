import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
=======
import { HomePageComponent } from './home-page/home-page.component';
import { TradersHomePageComponent } from './traders-home-page/traders-home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'traders', component: TradersHomePageComponent}
>>>>>>> liyaliya
];

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
