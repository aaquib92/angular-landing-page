import { Component, OnInit } from '@angular/core';
import { HfService } from '../hf.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // constructor() { }
  constructor( public nav: HfService ) {}


  ngOnInit() {
    // this.nav.hide();
    // this.nav.doSomethingElseUseful();
    
  }
  

}