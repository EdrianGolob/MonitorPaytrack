import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
{   
    path: '', component: AppComponent, children: [
        { path: 'adto', loadChildren: () => import('../app/adto/adto.module').then(
            (file) => file.AdtoModule
            ),
        },
    ],
},
{   
    path: '', component: AppComponent, children: [
        { path: 'prest', loadChildren: () => import('../app/prest/prest.module').then(
                (file) => file.PrestModule
            ),
        },
    ],
},
];
