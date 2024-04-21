import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testimonials3Component } from './testimonials3.component';

describe('Testimonials3Component', () => {
  let component: Testimonials3Component;
  let fixture: ComponentFixture<Testimonials3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Testimonials3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Testimonials3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
