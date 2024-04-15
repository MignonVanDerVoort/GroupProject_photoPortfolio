import { Component, OnInit } from '@angular/core';
import { iPrint } from '../../iPrint';
import { prints } from '../../prints';

@Component({
  selector: 'app-shop-grid',
  templateUrl: './shop-grid.component.html',
  styleUrl: './shop-grid.component.css'
})
export class ShopGridComponent implements OnInit {

  printItems!: iPrint[];
  prints!: iPrint;
 
constructor (){}

  ngOnInit(): void {
    this.printItems = prints;
  }

}
