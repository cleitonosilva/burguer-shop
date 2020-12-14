import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SnackComponent } from './pages/snack/snack.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bebidas', component: DrinksComponent},
  {path: 'lanches', component: SnackComponent},
  { path: 'promocoes', component: HomeComponent },
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
