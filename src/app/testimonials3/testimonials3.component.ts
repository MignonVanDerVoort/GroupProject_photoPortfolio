import { Component, OnInit } from '@angular/core';
import { iTestimonials } from '../../testimonials.model';
import { testimonials } from '../../testimonials';

@Component({
  selector: 'app-testimonials3',
  templateUrl: './testimonials3.component.html',
  styleUrl: './testimonials3.component.css'
})
export class Testimonials3Component implements OnInit{
  // hey Karl, testimonials data is located in ../testimonials.ts
  // and the interface for the type in ../testimonials.model
  // it is just the copy of your first 2 testimonials, so you can feel free to edit them, and change my dummy pixabay images :)
  testimonials!:iTestimonials[];

  ngOnInit(): void {
    this.testimonials = testimonials;
  }
  switchActive(clickedId: number) {
    // a simple explanation for you:

    //here we find the active testimonial (it should always be only one with the class 'active')
    const activeTestimonial = this.testimonials.find(t => t.active);
    //and also the clicked one (we pass the ID through the method in order to find it)
    const clickedTestimonial = this.testimonials.find(t => t.id === clickedId);

    //and this part just swaps the IDs and also the class active
    if (clickedTestimonial && activeTestimonial) {
      let clickedId = clickedTestimonial.id
      let activeId = activeTestimonial.id
      activeTestimonial.active = false;
      activeTestimonial.id = clickedId;
      clickedTestimonial.active = true;
      clickedTestimonial.id = activeId;

      // the rest of the magic happens in the html template
      
    }
  }

  // this method simply creates and array of zeroes according to the number of stars in the testimonials object
  getStars(n: number): any[] {
    return new Array(n).fill(0);
  }
    
  }
