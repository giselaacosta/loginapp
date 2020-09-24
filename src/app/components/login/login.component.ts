import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]

})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authSvc: AuthService ,private router: Router)  { }

  ngOnInit(): void {
  }
  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authSvc.login(email, password);
      if (user) {

this.router.navigate(['bienvenido'])     
 }else
 {
  this.router.navigate(['error'])  
 }
    } catch (error) {
      console.log(error);

       

    }
  }

  botonAutocompletar(){
 
   this.loginForm = new FormGroup({
    email: new FormControl('gise@gmail.com'),
    password: new FormControl('123456'),
  });
   console.log( this.loginForm.value );  
  }
}

