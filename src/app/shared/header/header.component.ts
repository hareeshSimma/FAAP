import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  pdf1(){
alert("pdf1-----");
  }
   pdf2(){
  alert("pdf2---");
  }

 
  ngOnInit() {
  }

}
