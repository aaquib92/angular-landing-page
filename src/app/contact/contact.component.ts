import { Component, OnInit } from '@angular/core';
import { HfService } from '../hf.service';
import { FooterService } from '../footer.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
