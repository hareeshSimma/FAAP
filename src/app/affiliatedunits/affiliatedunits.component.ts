import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affiliatedunits',
  templateUrl: './affiliatedunits.component.html',
  styleUrls: ['./affiliatedunits.component.css']
})
export class AffiliatedunitsComponent implements OnInit {
   value:string;
   public temp:string="";
   
   
  
  constructor() {

  this.value="";

   }

  ngOnInit() {
  }

  public onClick(i){
    
  
    var idAttr = i.target.attributes.id;
    this.value = idAttr.nodeValue;

     
   
    }

  }

