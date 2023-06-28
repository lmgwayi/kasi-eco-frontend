import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditHistoryComponent } from './credit-history/credit-history.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PaymentPortalComponent } from './payment-portal/payment-portal.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { MyListComponent } from './my-list/my-list.component';
import { OurTradersComponent } from './our-traders/our-traders.component';
import { TradersHomePageComponent } from './traders-home-page/traders-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditHistoryComponent,
    SignupComponent,
    LoginComponent,
    PaymentPortalComponent,
    HomePageComponent,
    HelpCenterComponent,
    MyListComponent,
    OurTradersComponent,
    TradersHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
