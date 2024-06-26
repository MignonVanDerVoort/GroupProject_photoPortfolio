import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { PetAlbumComponent } from './portfolio/pet-album/pet-album.component';
import { LandscapeAlbumComponent } from './portfolio/landscape-album/landscape-album.component';
import { ArchitectureAlbumComponent } from './portfolio/architecture-album/architecture-album.component';
import { Testimonials3Component } from './testimonials3/testimonials3.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { Testimonials2Component } from './testimonials2/testimonials2.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component:AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'portfolio', component: PortfolioComponent
  },
  {
    path: 'testimonials', component: TestimonialsComponent
  },
  {
    path: 'testimonials2', component: Testimonials2Component
  },
  {
    path: 'testimonials3', component: Testimonials3Component
  },
  {
    path: 'hero', component: HeroComponent
  },
  {
    path: 'pet', component: PetAlbumComponent
  },
  {
    path: 'landscape', component: LandscapeAlbumComponent
  },
  {
    path: 'architecture', component: ArchitectureAlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
