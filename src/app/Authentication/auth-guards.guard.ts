import { CanActivateFn, Router } from '@angular/router';

export const authGuardsGuard: CanActivateFn = (route, state) => {

  if(localStorage.getItem("token")){
    return true;
  }
  else{
    alert("You are need to login to access this page");
    var router:Router= new Router();
    router.navigateByUrl("/login");
    return false;
  }
};
