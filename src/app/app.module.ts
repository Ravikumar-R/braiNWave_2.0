import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageCouponModule } from './manageCoupon/manageCoupon.module';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [ManageCouponModule, BrowserAnimationsModule, BrowserModule, AppRoutingModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
