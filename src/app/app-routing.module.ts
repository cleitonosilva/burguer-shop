import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuards } from './guards/auth-guards';
import { CartComponent } from './pages/cart/cart.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SnackComponent } from './pages/snack/snack.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bebidas', component: DrinksComponent},
  { path: 'lanches', component: SnackComponent},
  { path: 'promocoes', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: RegisterComponent},
  { path: 'carrinho', component: CartComponent},
    // { path: 'carrinho', component: CartComponent, 
    // canActivate: [AuthGuards]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
