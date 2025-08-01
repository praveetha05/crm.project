import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import{provideFirebaseApp} from '@angular/fire/app'

import { routes } from './app.routes';
import { initializeApp } from 'firebase/app';
import { environment } from './environment';
import{getAuth,provideAuth} from '@angular/fire/auth'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    provideFirebaseApp(()=>(initializeApp(environment.firebaseConfig))),

    provideAuth(()=>getAuth())

    

  
  ]
}
