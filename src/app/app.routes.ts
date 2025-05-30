import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ClientesComponent } from './clientes/clientes.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'quem-somos', component: AboutComponent},
    { path: 'contato', component: ContactComponent},
    { path: 'clientes', component: ClientesComponent},
    { path: 'home', component: HomeComponent }
];
