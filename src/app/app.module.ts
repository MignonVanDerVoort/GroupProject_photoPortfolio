import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLinksComponent } from './social-links/social-links.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ShopGridComponent } from './home/shop-grid/shop-grid.component';
import { AwardsComponent } from './about/awards/awards.component';
import { Testimonials2Component } from './testimonials2/testimonials2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    PortfolioComponent,
    TestimonialsComponent,
    ContactComponent,
    SocialLinksComponent,
    ShopGridComponent,
    AwardsComponent,
    Testimonials2Component,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, CarouselModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
