import { Component, OnInit } from '@angular/core';
import { FooterService } from '../footer.service';
import { HfService } from '../hf.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public nav:HfService, public f:FooterService) { }

  ngOnInit() {
     // to hide header and footer
     this.nav.show();
     this.nav.doSomethingElseUseful();
     this.f.show();
     this.f.doSomethingElseUseful();
     // end
  }

}
