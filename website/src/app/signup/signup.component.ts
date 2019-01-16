import { Component, OnInit } from '@angular/core';
import { HfService } from '../hf.service';
import { FooterService } from '../footer.service';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  circle1Color: string
  circle2Color: string


  prevClick= function () {
    this.router.navigateByUrl('/register');
};

  
  private url = 'http://127.0.0.1:8000/api/web/v1/create-users/';
 

  constructor( public nav:HfService, public f:FooterService,private http:HttpClient,private formBuilder: FormBuilder ,private router:Router) {}


  ngOnInit() {

    // to hide header and footer
    this.nav.hide();
    this.nav.doSomethingElseUseful();
    this.f.hide();
    this.f.doSomethingElseUseful();
    // end

    // validations start

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile_no: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]]

  });

  // validations end
    
  }
  IsHidden= false;
  IsShown= true;


  // convenience getter for easy access to form fields
  get fr() { return this.registerForm.controls; }

// Sigup form submission start

onSubmit(){
  
 this.submitted = true;
 
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }else{
   this.IsHidden= !this.IsHidden;
   this.IsShown = !this.IsShown;
   this.circle1Color = '#a2dc6b'; //desired Color
   this.circle2Color = '#f4a19a'; //desired Color
  }

 

  let data = this.registerForm.value;
  let myPostObject = {
    'first_name':data.firstName,
    'last_name':data.lastName,
    'email':data.email,
    'phone_number':data.mobile_no,
    'password':data.password,
  }
 

// let obj = JSON.stringify(myPostObject);


// validations end


  // api to create user

  this.http.post(this.url, myPostObject)
  .subscribe(response => {
      // debugger;
    console.log(response);
    alert('created successfully');
  },error => {
    alert('Something went wrong');

    // console.log(err);
    // console.log(err);
});

// end of api

}
// End of Signup Form Submission

  
}








