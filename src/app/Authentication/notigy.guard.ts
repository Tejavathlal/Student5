import { CanDeactivateFn } from '@angular/router';

export const notigyGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  

  
    if(confirm("Are You willing go to back")){
        return true;
      }
      else{
        return false;
      }

};
