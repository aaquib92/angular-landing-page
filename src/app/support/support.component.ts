import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HfService } from '../hf.service';
import { FooterService } from '../footer.service';


@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  registerForm: FormGroup;


  constructor(private formBuilder: FormBuilder,public nav:HfService, public f:FooterService ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      contactno: ['', Validators.required],
     

  });
     // to hide header and footer
     this.nav.show();
     this.nav.doSomethingElseUseful();
     this.f.show();
     this.f.doSomethingElseUseful();
     // end
  }

}
