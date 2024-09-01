import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MapsComponent } from './maps/maps.component';


export const routes: Routes = [
    {path: 'register', component:RegisterComponent}, 
    {path: 'login', component:LoginComponent},
    {path: 'map', component:MapsComponent},
];

