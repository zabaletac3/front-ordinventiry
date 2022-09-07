import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { PagefotfoundComponent } from './components/pagefotfound/pagefotfound.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { RegisterComponent } from './components/register/register.component';
import { ListUserComponent } from './components/users/list-user/list-user.component';
import { AuthGuard } from './guards/auth.guard';


// Rutas de navegación
const routes: Routes = [
  
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path:'inicio',
    component: InicioComponent, canActivate: [ AuthGuard ]
  },
  {
    path:'products',
    component: ListProductsComponent, canActivate: [ AuthGuard ]
  },
  {
    path:'users',
    component: ListUserComponent, canActivate: [ AuthGuard ]
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
    path:'**',
    component: PagefotfoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
