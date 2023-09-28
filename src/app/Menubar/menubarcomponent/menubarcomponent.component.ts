import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubarcomponent',
  templateUrl: './menubarcomponent.component.html',
  styleUrls: ['./menubarcomponent.component.css']
})
export class MenubarcomponentComponent {
  constructor(private router:Router){}

  logout(){
    alert("login page is SuccessFully");
    this.router.navigateByUrl("/login");
    localStorage.removeItem("token")
  }

}
