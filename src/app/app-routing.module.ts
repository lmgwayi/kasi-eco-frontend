import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TradersHomePageComponent } from './traders-home-page/traders-home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'traders', component: TradersHomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
