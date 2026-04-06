import { Routes } from '@angular/router';
import { Login } from './pages/login/login'
import { RecoveryPassword } from './pages/recovery-password/recovery-password';
import { Register } from './pages/register/register';
import { Home } from './pages/home/home';
import { InitialPage } from './pages/initial-page/initial-page';
import { Cocinero } from './pages/cocinero/cocinero';

import { Admin } from './pages/admin/admin';
import { MeseroComponent } from './pages/mesero/mesero';

export const routes: Routes = [
    { path: '', redirectTo:'initial-page', pathMatch: 'full' },
    { path: 'initial-page', component:InitialPage },
    { path: 'login', component:Login },
    { path: 'register', component:Register },
    { path: 'recovery-password', component:RecoveryPassword },
    { path: 'home', component: Home},
    { path: 'cocinero', component: Cocinero},
    { path: 'administrador', component: Admin},
<<<<<<< HEAD
    { path: 'mesero', component: MeseroComponent},
=======
    { path: 'mesero', component: Mesero},
    { path: '**', redirectTo: 'initial-page' }
>>>>>>> develop
];
