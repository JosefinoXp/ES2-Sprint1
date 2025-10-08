import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Registrer } from './components/registrer/registrer';
import { Home } from './components/home/home';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: 'register',
        component: Registrer
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: '**', redirectTo: 'login', pathMatch: 'full'
    }
];