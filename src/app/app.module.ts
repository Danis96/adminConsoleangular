import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './card/card.component';
import { CustomerNavigationComponent } from './customer-navigation/customer-navigation.component';
// import { AppRouting } from './app-routing.module';

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    CustomerNavigationComponent,
  ],
  imports: [
    BrowserModule,
    // AppRouting,
    NoopAnimationsModule,
    MatToolbarModule,
    NoopAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
