// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import { AppComponent } from './app.component';
// import { AuthGuard } from './_helpers/_guards';
// import { JwtInterceptor, ErrorInterceptor } from './_helpers';
// import { AlertService, AuthenticationService, UserService } from './_services';
// import { CreditHistoryComponent } from './credit-history/credit-history.component';
// import { LoginComponent } from './login';
// import { PaymentPortalComponent } from './payment-portal/payment-portal.component';
// import { HelpCenterComponent } from './help-center/help-center.component';
// import { MyListComponent } from './my-list/my-list.component';

// import { MenuComponent } from './menu/menu.component';
// import { OurTradersComponent } from './our-traders/our-traders.component';
// import { TradersHomePageComponent } from './traders-home-page/traders-home-page.component';
//import { ProductDetailsComponent } from './product-details/product-details.component';

//import { ProfileComponent } from './profile/profile.component'
// import { RouterModule, Routes } from '@angular/router';
// import { RegisterComponent } from './register/register.component';
// import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TradersDetailsComponent } from './traders-details/traders-details.component';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    // AppComponent,
    // CreditHistoryComponent,
    // LoginComponent,
    // PaymentPortalComponent,
    // HelpCenterComponent,
    // MyListComponent,
    // MenuComponent,
    // RegisterComponent,
    // HomeComponent,
    // OurTradersComponent,
    // TradersHomePageComponent,
    // MenuComponent,
    //ProductDetailsComponent,
    //ProfileComponent,
    TradersDetailsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    // ReactiveFormsModule,
    // RouterModule.forRoot(routes),
    AppRoutingModule

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
