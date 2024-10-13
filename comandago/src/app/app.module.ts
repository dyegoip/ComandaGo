import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {SQLite} from '@awesome-cordova-plugins/sqlite/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, IonicModule.forRoot(), RouterModule, HttpClientModule, CommonModule, FormsModule, ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideAnimationsAsync(), SQLite],
  bootstrap: [AppComponent],
})
export class AppModule {}
