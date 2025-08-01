import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Employee } from './employee/employee';
import { Update } from './update/update';
import { Details } from './details/details';
import { Empsign } from './empsign/empsign';
import { Empdash } from './empdash/empdash';
import { Customer } from './customer/customer';
import { Cusdetails } from './cusdetails/cusdetails';
import { Cusupdate } from './cusupdate/cusupdate';
import { crmGuard } from './crm-guard';
import { Profile } from './profile/profile';

export const routes: Routes = [
    {path:'login',component:Login},
    {path:'employee',component:Employee},
    {path:'details',component:Details,canActivate:[crmGuard]},
    {path:'update/:id',component:Update},
    {path:'empsign',component:Empsign},
    {path:'customer',component:Customer},
    {path:'cusdetails',component:Cusdetails,canActivate:[crmGuard]},
     {path:'cusupdate/:id',component:Cusupdate},
     { path: 'empdash/:email', component: Empdash },
     {path:'profile',component:Profile}
];
