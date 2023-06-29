import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthGuard } from './_helpers/_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { CreditHistoryComponent } from './credit-history/credit-history.component';
import { LoginComponent } from './login';
import { PaymentPortalComponent } from './payment-portal/payment-portal.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { MyListComponent } from './my-list/my-list.component';
<<<<<<< HEAD
import { MenuComponent } from './menu/menu.component';
<<<<<<< HEAD
import { RegisterComponent } from './register';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
=======
import { OurTradersComponent } from './our-traders/our-traders.component';
import { TradersHomePageComponent } from './traders-home-page/traders-home-page.component';
>>>>>>> liyaliya
=======
import { ProductDetailsComponent } from './product-details/product-details.component';
>>>>>>> mgwayimgwayimgwayi

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CreditHistoryComponent,
    LoginComponent,
    PaymentPortalComponent,
    HelpCenterComponent,
    MyListComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    MenuComponent,
    RegisterComponent,
    HomeComponent
=======
    OurTradersComponent,
    TradersHomePageComponent
>>>>>>> liyaliya
=======
    MenuComponent,
    ProductDetailsComponent
>>>>>>> mgwayimgwayimgwayi
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
