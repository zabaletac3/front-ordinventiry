import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './components/users/list-user/list-user.component';
import { DetailUserComponent } from './components/users/detail-user/detail-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailProductComponent } from './components/products/detail-product/detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    DetailUserComponent,
    EditUserComponent,
    ListProductsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
