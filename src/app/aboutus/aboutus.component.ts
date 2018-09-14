import { Component, OnInit } from '@angular/core';
import { FooterService } from '../footer.service';
import { HfService } from '../hf.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

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
