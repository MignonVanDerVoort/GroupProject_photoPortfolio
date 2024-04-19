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
  defaultImage= './assets/about_pics/award.svg';
  hoverStates: boolean[]=[];
  awardImage = '';

  constructor (){
}

ngOnInit(): void {
  this.printAwards = awards;
}

onMouseOver (index:number) {
  this.hoverStates[index] = true;
}

onMouseOut(index:number){
  this.hoverStates[index] = false;}


}
