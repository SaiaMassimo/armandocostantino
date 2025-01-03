import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GiroMondoComponent } from './giro-mondo/giro-mondo.component';
import { SostienimiComponent } from './sostienimi/sostienimi.component';
import { ChiSonoComponent } from './chi-sono/chi-sono.component';


export const routes: Routes = [
    { path: 'giro-del-mondo', component: GiroMondoComponent },
    { path: 'home', component: HomeComponent,},
    { path: '', component: HomeComponent,},
    { path: 'sostienimi', component: SostienimiComponent,},
    { path: 'chi-sono', component: ChiSonoComponent,},
];
