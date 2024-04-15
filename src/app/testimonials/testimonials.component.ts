import { Component } from '@angular/core';

export interface Slide {
  imgSrc: string;
  imgAlt: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})

export class TestimonialsComponent {

  selectedIndex = 0;

  images: Slide[] = [
    {
      imgSrc: '../assets/testimonial_img/karl.png',
      imgAlt: 'Karl 1'
    },
    {
      imgSrc: '../assets/testimonial_img/karl.png',
      imgAlt: 'Karl 2'
    },
    {
      imgSrc: '../assets/testimonial_img/karl.png',
      imgAlt: 'Karl 3'
    },
    {
      imgSrc: '../assets/testimonial_img/karl.png',
      imgAlt: 'Karl 4'
    },
    {
      imgSrc: '../assets/testimonial_img/karl.png',
      imgAlt: 'Karl 5'
    },
    {
      imgSrc: '../assets/testimonial_img/karl.png',
      imgAlt: 'Karl 6'
    },
    {
      imgSrc: '../assets/testimonial_img/karl.png',
      imgAlt: 'Karl 7'
    },
    {
      imgSrc: '../assets/testimonial_img/karl.png',
      imgAlt: 'Karl 8'
    },
    {
      imgSrc: '../assets/testimonial_img/karl.png',
      imgAlt: 'Karl 9'
    }
  ]
}
