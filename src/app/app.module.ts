import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    BienvenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
