import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affiliatedunits',
  templateUrl: './affiliatedunits.component.html',
  styleUrls: ['./affiliatedunits.component.css']
})
export class AffiliatedunitsComponent implements OnInit {
   value:string;
   public temp:string="";
   //ant:boolean=true;
  // public status:any={
  //    ananth :false,
  //    chit:false,
  //    ysr:false,
  //    kurn:false,
  //    east:false,
  //    gunt:false,
  //   kris:false,
  //   nel:false,
  //   prak:false,
  //   srik:false,
  //   vsk:false,
  //   vzg:false,
  //   west:false
  // }
  constructor() {this.value=""; }

  ngOnInit() {
  }

  public onClick(i){
    console.log(i);
    // this.ant=false;
  
    var idAttr = i.target.attributes.id;
    this.value = idAttr.nodeValue;

     
   
    }

  }

