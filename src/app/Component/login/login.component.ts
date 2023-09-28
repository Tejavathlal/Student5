import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;

  public loginForm: FormGroup = new FormGroup({
     email: new FormControl('',[Validators.required]),
     password: new FormControl('', [Validators.required])
  })

  constructor(private loginService: LoginService, private router:Router){}

  login(){
     this.loginService.getlogin(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("Login Page is SuccessFully");
        this.router.navigateByUrl("/dashboard");
        localStorage.setItem("token", data.token);

      },
      (err:any)=>{
        alert("Login page is Failed");
      }
     )
  }
}
