import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { PromotionsHomeComponent } from './components/promotions-home/promotions-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { DrinksListComponent } from './components/drinks-list/drinks-list.component';
import { LocalStorageModule} from 'angular-2-local-storage'
import { CommonModule } from '@angular/common';
import { GenericProductListComponent } from './shared/generic-product-list/generic-product-list.component';
import { SnackComponent } from './pages/snack/snack.component';
import { SnackListComponent } from './components/snack-list/snack-list.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './pages/login/auth.service';
import { RegisterComponent } from './pages/register/register.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './pages/cart/cart.component';
import { AuthGuards } from './guards/auth-guards';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GenericModalComponent } from './shared/generic-modal/generic-modal.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ProductsListComponent,
    PromotionsHomeComponent,
    FooterComponent,
    DrinksComponent,
    DrinksListComponent,
    GenericProductListComponent,
    SnackComponent,
    SnackListComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    GenericModalComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    RouterModule,
    LocalStorageModule.forRoot({storageType : 'localStorage'}),
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbAlertModule,
    ToastrModule.forRoot({
      timeOut: 10000,
    positionClass: 'toast-bottom-right',
    progressBar: true
}),NgbModule,

],
  providers: [AuthService, AuthGuards],
  bootstrap: [AppComponent]
})
export class AppModule { }
