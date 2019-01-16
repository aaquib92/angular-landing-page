import { Component, OnInit } from '@angular/core';
import { HfService } from '../hf.service';
import { FooterService } from '../footer.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  imgColor: string


  // constructor() { }
  constructor( public nav:HfService, public f:FooterService ) {}



  ngOnInit() {
    this.nav.hide();
    this.nav.doSomethingElseUseful();
    this.f.hide();
    this.f.doSomethingElseUseful();
    
  }
  // showNav = false;



}