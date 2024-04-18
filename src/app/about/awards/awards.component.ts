import { Component, OnInit } from '@angular/core';
import { iAward } from '../../iAward';
import { awards } from '../../awards';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.css'
})
export class AwardsComponent implements OnInit{

  printAwards!: iAward[];
  awards!: iAward;

  constructor (){}

ngOnInit(): void {
  this.printAwards = awards;
}

}
