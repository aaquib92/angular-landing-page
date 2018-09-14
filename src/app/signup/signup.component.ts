import { Component, OnInit } from '@angular/core';
import { HfService } from '../hf.service';
import { FooterService } from '../footer.service';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



// import * as $ from 'jquery';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

// start of class

export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  circle1Color: string
  circle2Color: string

  // back button
prevClick= function () {
  this.router.navigateByUrl('');
  this.nav.show();
  this.nav.doSomethingElseUseful();
  this.f.show();
  this.f.doSomethingElseUseful();
};
// end


// close button
close= function () {
  this.router.navigateByUrl('');
  this.nav.show();
  this.nav.doSomethingElseUseful();
  this.f.show();
  this.f.doSomethingElseUseful();
};
// end


emailPattern = "(([\w\.-]*[a-zA-Z0-9_]){2,}@([\w\.-]*[a-zA-Z0-9]){2,}\\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z])*";

mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
// mobile no text validation
onkeypress(event: any) {
  const pattern = /[0-9\+\-\ ]/;
  let inputChar = String.fromCharCode(event.charCode);

  if (!pattern.test(inputChar)) {
    // invalid character, prevent input
    event.preventDefault();
  }
}
// end

//name should not accept number validation
onkeypressname(event: any) {

  const pattern = /[A-z\s ]/;
  
  let inputChar1 = String.fromCharCode(event.charCode);

  if (!pattern.test(inputChar1)) {
    // invalid character, prevent input
    event.preventDefault();
  }
}

//end



// url for create user
  
  private url = 'https://api.digimkey.com/api/web/v1/create-users/';

  // end of url
 

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
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      mobile_no: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]]

  });

  // validations end
  
    
  }
  // hidden and shown fields 
  IsHidden= false;
  IsShown= true;
  Hide = false;
  Show= true;
// end

// otp input focus start

 keytab(event,maxlength){
 
  var val1 =  (<HTMLInputElement>document.getElementById('code1')).value
  var val2 =  (<HTMLInputElement>document.getElementById('code2')).value
  var val3 =  (<HTMLInputElement>document.getElementById('code3')).value
  var val4 =  (<HTMLInputElement>document.getElementById('code4')).value


  console.log(maxlength);

if ( val1.length == maxlength){
   document.getElementById("code2").focus();
}
if ( val2.length == maxlength){
  document.getElementById("code3").focus();
}
if ( val3.length == maxlength){
  document.getElementById("code4").focus();
}
if ( val4.length == maxlength){
  document.getElementById("code5").focus();
}


 }

 // otp input focus end

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

// appending mobile number
  let data = this.registerForm.value;
  let x = document.getElementById('no') ;
  x.innerHTML+= data.mobile_no;

// end 


  let myPostObject = {
    'first_name':data.firstName,
    'last_name':data.lastName,
    'email':data.email,
    'phone_number':data.mobile_no,
    'password':data.password,
  }
 
  // api to create user

  const headers = new HttpHeaders();
  headers.set('Content-Type', 'application/json; charset=utf-8');
  this.http.post(this.url, myPostObject,{headers: headers})
  .subscribe(response => {
      // debugger;
    console.log(response['id']);
    // let id = response['id'];
    document.getElementById("submit_otp").setAttribute("data-id",response['id'] );
    document.getElementById("resend_otp").setAttribute("data-id",response['id'] );

    alert('created successfully');
  },error => {
    alert('Something went wrong');

});

// end of api

}
// End of Signup Form Submission

otpSubmit(){
  // this.submitted = true;

 let a = (<HTMLInputElement>document.getElementById('code1')).value  ;
 let b = (<HTMLInputElement>document.getElementById('code2')).value  ;
 let c = (<HTMLInputElement>document.getElementById('code3')).value  ;
 let d = (<HTMLInputElement>document.getElementById('code4')).value  ;
 let e = (<HTMLInputElement>document.getElementById('code5')).value  ;
//  let f = (<HTMLInputElement>document.getElementById('code6')).value  ;
 let g = a+b+c+d+e;
 let obj = {
   'activation_code':parseInt(g)
 }

console.log(obj);

// api for otp verification


  const headers = new HttpHeaders();
  headers.set('Content-Type', 'application/json; charset=utf-8');
  this.http.patch('https://api.digimkey.com/api/web/v1/create-users/'+ document.getElementById("submit_otp").getAttribute("data-id") +'/verify-activation-code/', obj,{headers: headers})
  .subscribe(response => {
    console.log(response);
    alert(' otp verified successfully');
  },error => {
    alert('Something went wrong');

   
});
// end of api
}


// otp submit on last digit

lastinput(){

  let a = (<HTMLInputElement>document.getElementById('code1')).value  ;
  let b = (<HTMLInputElement>document.getElementById('code2')).value  ;
  let c = (<HTMLInputElement>document.getElementById('code3')).value  ;
  let d = (<HTMLInputElement>document.getElementById('code4')).value  ;
  let e = (<HTMLInputElement>document.getElementById('code5')).value  ;
  
// validations for otp inputs  
  if(a.length == 0 ||  b.length == 0 || c.length == 0 || d.length == 0 || e.length == 0){
    alert('Please fill in the input');
      return false;
  }
// end 

  let g = a+b+c+d+e;
  let obj = {
    'activation_code':parseInt(g)
  }
 
 console.log(obj);
 
 // api for otp verification
 
   const headers = new HttpHeaders();
   headers.set('Content-Type', 'application/json; charset=utf-8');
   this.http.patch('https://api.digimkey.com/api/web/v1/create-users/'+ document.getElementById("submit_otp").getAttribute("data-id") +'/verify-activation-code/', obj,{headers: headers})
   .subscribe(response => {
     console.log(response);
     alert(' otp verified successfully');
   },error => {
    // alert(error.activation_code);

     alert('Something went wrong');
 
    
 });

}


// end


resendOtp(){

  // start of resend otp

  const headers = new HttpHeaders();
  headers.set('Content-Type', 'application/json; charset=utf-8');
  this.http.patch('https://api.digimkey.com/api/web/v1/create-users/'+ document.getElementById("resend_otp").getAttribute("data-id") +'/resend-code/',{headers: headers})
  .subscribe(response => {
    console.log(response);
    alert(' otp resend successfully');
  },error => {
    alert('Something went wrong');

   
});


  // end

}

// password show and hide 


icon(){
  if( this.Hide= !this.Hide){
    let  input = document.getElementById('pass');
      input.setAttribute('type','text');
      this.Hide= true;
      this.Show= false;
  }else{
    let  input = document.getElementById('pass');
     input.setAttribute('type','password');
        this.Hide= false;
        this.Show= true;
  }
}

// end of password show hide

}

// end of class








