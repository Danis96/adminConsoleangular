import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import { CustomerNavigationComponent } from './customer-navigation/customer-navigation.component';
// import { AppRouting } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerNavigationComponent,
  ],
  imports: [
    BrowserModule,
    // AppRouting,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
