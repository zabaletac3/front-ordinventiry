import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { RegisterComponent } from './components/register/register.component';
import { ListUserComponent } from './components/users/list-user/list-user.component';


// Rutas de navegación
const routes: Routes = [
  
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  }
  ,
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'products',
    component: ListProductsComponent
  },
  {
    path:'users',
    component: ListUserComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
