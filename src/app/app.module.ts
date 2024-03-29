import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OrderComponent } from './order/order.component';
import { OrderCofirmComponent } from './order-cofirm/order-cofirm.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailProductComponent } from './detail-product/detail-product.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OrderComponent,
    OrderCofirmComponent,
    LoginComponent,
    RegisterComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    // HomeComponent,
    // DetailProductComponent
    // OrderComponent,
    // OrderCofirmComponent,
    LoginComponent,
    // RegisterComponent,
    // DetailProductComponent
    
  ]
})
export class AppModule { }
