import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials2',
  templateUrl: './testimonials2.component.html',
  styleUrl: './testimonials2.component.css'
})
export class Testimonials2Component implements OnInit{

  ngOnInit(): void {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }
  }

}


