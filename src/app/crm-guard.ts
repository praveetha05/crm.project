import { inject } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { CanActivateFn, Router } from '@angular/router';
import { map, take } from 'rxjs';

export const crmGuard: CanActivateFn = (route, state) => {

  const auth=inject(Auth);
  const router=inject(Router);

 return authState (auth).pipe(
  take(1),
  map(k=>{
    if(k){
      return true;
    }
    else{
       return router.createUrlTree(['/login']);
    }
  })
 )
};
